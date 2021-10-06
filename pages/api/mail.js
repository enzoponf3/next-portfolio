const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);
  const message = `
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;
  const data = {
    to: "enzoponf3@gmail.com",
    from: "enzoponf3@gmail.com",
    subject: "New portfolio contact form submited.",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  return mail
    .send(data)
    .then(() => res.status(200).json({ status: "Ok" }))
    .catch(() => res.status(400).json({ status: "Error" }));
};
