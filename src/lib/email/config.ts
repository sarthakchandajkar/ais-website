import nodemailer from 'nodemailer'
import { Resend } from 'resend'

// Nodemailer configuration
export const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

// Resend configuration
export const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Email templates
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
