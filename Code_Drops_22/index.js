function formatMoney(value) {
  const numero = String(value)
  .replace(/\D/g, "") // remove todos os caracteres
  .replace(/^0+/, ""); // remove todos os 0 inicias

  let counter = 1
  let isCommandFound = 'notFound'

  const formattedStringReversed = Array
  .from(numero.toString())
  .reverse()
  .reduce((acc, i, index, arr) => {
      if (counter == 2 && 
        isCommandFound == 'notFound' &&
        (arr.length > 2)){
            acc = acc + i + ','
            isCommandFound = 'found'
            counter = 0
        } else if (counter === 3 && (arr.length != (index + 1))){
            acc = acc + i + '.'
            counter = 0
        } else{
            acc = acc + i
        }

        counter ++
        return acc
  }, "")

  let formattedNumber = Array.from(formattedStringReversed).reverse().join("")

  if (formattedNumber.length == 2){
      formattedNumber = '0,' + formattedNumber
  } else if(formattedNumber.length == 1){
      formattedNumber = '0,0' + formattedNumber
  }

  return formattedNumber
}

function formatCEP(value){
    return String(value).replace(/\D/g, "") // Troca tudo que não for dígito, de maneira global, por vazio
    .slice(0, 8)  // Pega os primeiros 8 dígitos
    .replace(/(\d{5})(\d)/, "$1-$2") // pegamos os primeiros 5 digitos separado, e depois o restante dos digitos
    // separamos então em dois blocos - usando o ()
    // pegamos esses blocos na forma $1-$2, em que são pegados os 5 primeiros digitos, adicionado um traço e então o restante dos digitos
}

// Para conseguir exportar para o Npm, devemos exportar as funções
module.exports = {
    formatMoney,
    formatCEP
}

// console.log(formatCEP('12983719847298317418923742asjkdhasd123123')) // imprime 12983-719