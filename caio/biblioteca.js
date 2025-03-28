class Livro {
    constructor(Nome_Livro,Autor,Ano,Editora,ISBN){
        this.Nome_Livro = Nome_Livro;
        this.Autor = Autor;
        this.Ano = Ano;
        this.Editora = Editora;
        this.ISBN = ISBN;
    }
}

//distanciar da minha classe

class Biblioteca {
    constructor(){
        this.livro = []
    }

    add(lista_livro) {
        this.livro.push(lista_livro);
    }
}


//declara minha variável
var livro_01 = new Livro('Pela Manhã jogue suas semenstes', 'Michael R.', 2025, 'Videira', 152536985);
var livro_02= new Livro('Sucesso no Trabalho e Derrota no lar', 'Michael R.', 2027, 'Videira', 152524541);

//print
console.log(livro_01)
console.log(livro_02)

var lib = new Biblioteca()
lib.add(livro_01)
lib.add(livro_02)
console.log(lib)

var remov = new Biblioteca()
remov.pop(livro_01)
console.log(remov)

//remover e buscar
