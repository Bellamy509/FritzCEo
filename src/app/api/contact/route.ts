import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, organization, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { 
          error: "Name, email, and message are required", 
          code: "MISSING_REQUIRED_FIELDS" 
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedMessage = message.trim();
    const trimmedOrganization = organization ? organization.trim() : null;

    // Validate name length
    if (trimmedName.length < 2) {
      return NextResponse.json(
        { 
          error: "Name must be at least 2 characters", 
          code: "INVALID_NAME" 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { 
          error: "Please provide a valid email address", 
          code: "INVALID_EMAIL" 
        },
        { status: 400 }
      );
    }

    // Validate message length
    if (trimmedMessage.length < 10) {
      return NextResponse.json(
        { 
          error: "Message must be at least 10 characters", 
          code: "INVALID_MESSAGE" 
        },
        { status: 400 }
      );
    }

    // Insert contact submission
    const newSubmission = await db.insert(contactSubmissions)
      .values({
        name: trimmedName,
        email: trimmedEmail,
        organization: trimmedOrganization,
        message: trimmedMessage,
        createdAt: new Date().toISOString()
      })
      .returning();

    return NextResponse.json(
      {
        message: "Contact form submitted successfully",
        submission: newSubmission[0]
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}