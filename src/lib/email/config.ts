import { Resend } from 'resend'

export const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export const emailTemplates = {
  contactForm: {
    subject: 'New Contact Form Submission - AIS Website',
    from: 'noreply@assetinnovative.com',
  },
  confirmation: {
    subject: 'Thank you for contacting Asset Innovative Solutions',
    from: 'noreply@assetinnovative.com',
  },
}
