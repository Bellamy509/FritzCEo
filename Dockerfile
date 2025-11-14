# ───────────────────────────────────────────
# 1. Use a stable Node LTS image (22-slim)
#    This tag provides both amd64 and arm64 variants.
#    BuildKit will pick the correct one for the current platform
# ───────────────────────────────────────────
FROM --platform=linux/amd64 node:22-slim

# ───────────────────────────────────────────
# 2. Minimal OS tooling
# ───────────────────────────────────────────
RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    curl \
    unzip \
    python3 \
    python3-pip \
    python-is-python3 \
    procps \
 && rm -rf /var/lib/apt/lists/*

# Allow pip installs in Debian 12+/Ubuntu 23.04+ environment
ENV PIP_BREAK_SYSTEM_PACKAGES=1

# ───────────────────────────────────────────
# 2.1. Install Bun
# ───────────────────────────────────────────
RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/root/.bun/bin:$PATH"

# ───────────────────────────────────────────
# 2.1. Install Next.js CLI globally
# ───────────────────────────────────────────
RUN npm install -g next@latest eslint@latest

# ───────────────────────────────────────────
# 3. Build everything under /home/user/app
# ───────────────────────────────────────────
WORKDIR /home/user/app

# ───────────────────────────────────────────
# 4. Generate a brand‑new Next.js app with all
#    *default* answers (-y) and the latest versions
# ───────────────────────────────────────────
ENV CI=true

# ───────────────────────────────────────────
# 5.1. Configure npm to handle legacy peer deps
# ───────────────────────────────────────────
RUN npm config set legacy-peer-deps true \
 && npm config set fund false \
 && npm config set audit false

# ───────────────────────────────────────────
# 6.1. install dependencies
# ───────────────────────────────────────────
COPY . /home/user/app
RUN bun install

RUN bun install motion tailwindcss-animate tw-animate-css tailwind-merge clsx lucide-react react-icons
RUN bun install react-fast-marquee cobe @tabler/icons-react react-rough-notation @headlessui/react react-intersection-observer
RUN bun install -D eslint eslint-config-next
RUN bun install -D @eslint/eslintrc

# ───────────────────────────────────────────
# 7. Files are already in their correct locations:
#    - src/visual-edits/ (already exists)
#    - src/components/ErrorReporter.tsx (already exists)
#    - src/app/global-error.tsx (already exists)
#    - src/app/layout.tsx (already exists)
# ───────────────────────────────────────────

# ───────────────────────────────────────────
# 8. Build the Next.js application
# ───────────────────────────────────────────
RUN bun run build

# ───────────────────────────────────────────
# 9. Expose port (Railway will set PORT env var)
# ───────────────────────────────────────────
ENV PORT=3000
EXPOSE $PORT

# ───────────────────────────────────────────
# 10. Start the application
#    Railway sets PORT automatically, and Next.js needs to listen on 0.0.0.0
# ───────────────────────────────────────────
CMD ["sh", "-c", "next start -H 0.0.0.0 -p ${PORT:-3000}"]

