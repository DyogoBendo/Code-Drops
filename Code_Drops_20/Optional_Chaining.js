let user = {
    address: {
        street: 'Rua das Batatas'
    }
}

// Sintaxe antiga
//Se o endereço existir, pegamos a rua
let street = user.address && user.address.street 

// Usando a sintaxe nova, temos: 
street = user.address?.street

// Podemos também dar um valor padrão, para caso não exista o endereço

street = user.address?.street ?? 'Rua das Oliveiras, 232'
