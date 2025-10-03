import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface ContactFormEmailProps {
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
}

export const ContactFormEmail = ({
  name,
  email,
  phone,
  company,
  service,
  message,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New contact form submission from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        
        <Section style={section}>
          <Text style={label}>Name:</Text>
          <Text style={value}>{name}</Text>
        </Section>

        <Section style={section}>
          <Text style={label}>Email:</Text>
          <Text style={value}>{email}</Text>
        </Section>

        {phone && (
          <Section style={section}>
            <Text style={label}>Phone:</Text>
            <Text style={value}>{phone}</Text>
          </Section>
        )}

        {company && (
          <Section style={section}>
            <Text style={label}>Company:</Text>
            <Text style={value}>{company}</Text>
          </Section>
        )}

        <Section style={section}>
          <Text style={label}>Service Interest:</Text>
          <Text style={value}>{service}</Text>
        </Section>

        <Section style={section}>
          <Text style={label}>Message:</Text>
          <Text style={value}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
}

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
}

const section = {
  padding: '0 40px',
  marginBottom: '20px',
}

const label = {
  color: '#333',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0 0 5px 0',
}

const value = {
  color: '#666',
  fontSize: '14px',
  margin: '0',
  lineHeight: '1.4',
}
