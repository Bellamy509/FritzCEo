import { db } from '@/db';
import { categories } from '@/db/schema';

async function main() {
    const sampleCategories = [
        {
            title: 'AI & Technology',
            description: 'Insights on artificial intelligence, emerging technologies, and how they\'re reshaping the future of work and society.',
            slug: 'ai-technology',
            createdAt: new Date().toISOString(),
        },
        {
            title: 'Entrepreneurship',
            description: 'Lessons from building companies — the wins, the losses, the pivots, and everything in between.',
            slug: 'entrepreneurship',
            createdAt: new Date().toISOString(),
        },
        {
            title: 'Leadership',
            description: 'Thoughts on leading with integrity, growing through mistakes, and developing people-first leadership.',
            slug: 'leadership',
            createdAt: new Date().toISOString(),
        },
        {
            title: 'Business',
            description: 'Reflections on strategy, money, growth, systems, and sustainable decision-making.',
            slug: 'business',
            createdAt: new Date().toISOString(),
        },
        {
            title: 'Faith & Life',
            description: 'Exploring meaning, discipline, purpose, and becoming the person God designed me to be.',
            slug: 'faith-life',
            createdAt: new Date().toISOString(),
        },
        {
            title: 'Global Impact & Community',
            description: 'Stories about serving communities, empowering people, and building solutions that create real-world impact across cultures.',
            slug: 'global-impact-community',
            createdAt: new Date().toISOString(),
        },
    ];

    await db.insert(categories).values(sampleCategories);
    
    console.log('✅ Categories seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});