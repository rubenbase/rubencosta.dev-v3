export const sendMail = () => {
  const subject = '(Reason) - Brief summary of the email'
  const content = `
  Reason: Open source, Investments, New position, e-Learning, Other(specify) -

  Let me know how can I help you.
  `
  const mailto: string = `mailto:costamartinezruben@gmail.com?subject=${subject}&body=${content}`
  window.location.href = mailto
}
