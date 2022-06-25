const url = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const req = await fetch(url);
  const response = await req.json();
  return response;
};

export default getCurrencies;
