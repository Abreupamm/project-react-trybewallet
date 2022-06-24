function validacaoEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
export default validacaoEmail;
