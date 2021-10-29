const sgMail = require('@sendgrid/mail');
const { EMAIL_ID } = require('./config');
const EmailTemplate = require('../static/email-template')
const subscribe_template = require('../static/subscribe_template')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = (props) => {
  const {to, from, subject, text } = props;
  const msg = {
    to: to,
    from: from || EMAIL_ID, // Use the email address or domain you verified above
    subject: subject || 'SpicyDeli Restaurant',
    text: text,
    html: subscribe_template,
  };

  return sgMail.send(msg)
}