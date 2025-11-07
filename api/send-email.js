import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, eventType, eventDate, guestCount, message } = req.body

    // Validate required fields
    if (!name || !email || !phone || !eventType || !eventDate || !guestCount) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Chef At Home Banquetes <banquetes@chefathome.com>',
      to: ['banquetes@chefathome.com'], // Replace with actual email
      replyTo: email,
      subject: `Nueva Solicitud de Cotización - ${eventType}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Lora', Georgia, serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
                color: #FFC600;
                padding: 30px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .header h1 {
                margin: 0;
                font-family: 'Playball', cursive;
                font-size: 32px;
              }
              .content {
                background: #ffffff;
                padding: 30px;
                border: 1px solid #e0e0e0;
                border-top: none;
              }
              .field {
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 1px solid #f0f0f0;
              }
              .field:last-child {
                border-bottom: none;
              }
              .label {
                font-weight: 600;
                color: #FFC600;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 1px;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
                font-size: 16px;
              }
              .footer {
                background: #f9f9f9;
                padding: 20px;
                text-align: center;
                border-radius: 0 0 8px 8px;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Nueva Solicitud de Cotización</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nombre del Cliente</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>

              <div class="field">
                <div class="label">Teléfono</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>

              <div class="field">
                <div class="label">Tipo de Evento</div>
                <div class="value">${eventType}</div>
              </div>

              <div class="field">
                <div class="label">Fecha del Evento</div>
                <div class="value">${new Date(eventDate).toLocaleDateString('es-MX', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</div>
              </div>

              <div class="field">
                <div class="label">Número de Invitados</div>
                <div class="value">${guestCount} personas</div>
              </div>

              ${message ? `
                <div class="field">
                  <div class="label">Mensaje</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>Chef At Home Banquetes - Zona Esmeralda</p>
              <p>Este email fue enviado desde el formulario de contacto del sitio web.</p>
            </div>
          </body>
        </html>
      `,
    })

    return res.status(200).json({ success: true, data })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ error: 'Error sending email', details: error.message })
  }
}
