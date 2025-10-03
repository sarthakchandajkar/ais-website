import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations/contact'
import { resend, emailTemplates } from '@/lib/email/config'
import { ContactFormEmail } from '@/lib/email/templates/contact-form'
import { render } from '@react-email/render'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body)
    
    // Render the email template
    const emailHtml = await render(ContactFormEmail(validatedData))
    
    // Send email using Resend
    if (!resend) {
      console.warn('Resend API key not configured, skipping email send')
      return NextResponse.json(
        { message: 'Contact form received (email not configured)' },
        { status: 200 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: emailTemplates.contactForm.from,
      to: ['info@assetinnovative.com'],
      subject: emailTemplates.contactForm.subject,
      html: emailHtml,
    })

    if (error) {
      console.error('Email sending failed:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // TODO: Save to Supabase database
    // const supabase = createClient()
    // await supabase.from('contact_submissions').insert(validatedData)

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid form data' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
