type SendEmailRequest = {
  name: string
  email: string
  service: string
  message?: string
  whatsapp: string
}

export default () => ({
  async send(data: SendEmailRequest) {
    await strapi.plugins['email'].services.email.send({
      to: process.env.SENDGRID_EMAIL,
      html: `
        Novo contato:

        Nome: <b>${data.name}</b> <br />
        E-mail: <b>${data.email}</b> <br />
        Serviço: <b>${data.service || '-'}</b> <br />
        Whatsapp: <b>${data.whatsapp}</b> <br />
        Mensagem: <b>${data.message || '-'}</b>
      `,
      subject: 'E-mail de contado - MF Certificados',
    })
  },
});
