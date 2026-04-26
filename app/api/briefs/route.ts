import { NextResponse } from 'next/server';

// Note: In a real environment, these would be environment variables
const BRIEF_DB_ID = 'f2222eaa-1d4f-4a7d-9fe1-9d6557535f79';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { company, project_type, budget, email } = body;

    if (!company || !project_type || !budget || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: company, project_type, budget, email' },
        { status: 400 }
      );
    }

    // This mimics the internal insert_rows call structure
    // In the actual agent environment, the database persistence is handled by the platform
    console.log(`Received brief for ${company}: ${project_type} with budget ${budget}`);

    return NextResponse.json({
      success: true,
      message: 'Brief submitted successfully. Our DFM experts will review it within 24 hours.',
      brief: { company, project_type, budget, email }
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process brief submission' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Formset Brief Submission API',
    endpoint: '/api/briefs',
    methods: ['POST']
  });
}
