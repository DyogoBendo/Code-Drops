let person = {
    name: 'Dyogo',
    age: 0,
    legal: false
}

console.log(person.names || 'Names') // primeiro tenta pegar a propriedade names de person, se não tiver (for undefinied), mostra Names

console.log(person.age || '1') // nesse caso, na sintaxe antiga, o JS considera 0 como não existente também, e mostra 1
console.log(person.age ?? '12') // a fim de resolver esse problema, surgiu a sintaxe usando ??

person.name = ''
console.log(person.name || 'Names') // o mesmo ocorre para Strings vazias
console.log(person.name ?? 'Names')

console.log(person.legal || true) // o mesmo com Boolean
console.log(person.name ?? true)



