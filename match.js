const textoCPF = 'Meu cpf é 123.456.789-12';

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(textoCPF.match(regex));