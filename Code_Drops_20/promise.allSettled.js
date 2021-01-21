const p1 = new Promise((res, rej) => {
    setTimeout(res, 100)
})

const p2 = new Promise((res, rej) => setTimeout(rej, 500))

Promise.all([p1, p2]).then(data => data.forEach(i => console.log(i))) // tem problemas com a Promise, por conta de p2
Promise.allSettled([p1, p2]).then(data => data.forEach(i => console.log(i))) // consegue imprimir normalmente, mesmo que a promise tenha sido rejeitada ou esteja pendente