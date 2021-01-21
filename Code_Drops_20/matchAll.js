var regex = /t(e)(st(\d?))/g; 
// numa expressão regular padrão, seria pego todo esse elemento
// e também cada uma das sub-ideias, (e) e (st(\d?)) e (\d?)

var string = 'test1test2';
// aplicando um match na string, a partir de regex, obtemos test1 e test2
string.match(regex); // gives ['test1', 'test2'] - how do i get the capturing groups?
// assim, faltam algumas expressões regulares a serem mostradas

// Aplicando matchAll, ele traz todas as opções

matching = string.matchAll(regex)

// matching é um iteravel, que possui todos esses valores

