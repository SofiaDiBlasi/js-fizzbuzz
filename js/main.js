let lista = document.getElementById("lista");

//Ciclo partendo da 0 fino a che non arriva a 100, incrementando +1 ogni volta
for (let i = 0; i <= 100; i++) {

    let valoreDellaLista = i;

    let stileLista = "#f98ea9";

    //controllo che la divisione per 3 dia resto 0, idem per 5
    if(i % 3 == 0 && i % 5 == 0) {
        valoreDellaLista = "FizzBuzz";
        stileLista = "#b785e1";

    //controllo che la divisione per 3 dia resto 0    
    } else if (i % 3 == 0) {
        valoreDellaLista = "Fizz";
        stileLista = "#f9ccd7";

    //controllo che la divisione per 5 dia resto 0 
    } else if (i % 5 == 0) {
        valoreDellaLista = "Buzz";
        stileLista = "#d94777";
    }

    //creo un elemento di tipo li
    let elemento = document.createElement("li");

    //"appendiamo" il valore dentro al li
    elemento.append(valoreDellaLista);

    //modifichiamo un attributo dello stile del li appena creato
    elemento.style.backgroundColor = stileLista;

    //"appendiamo" il li appena creato alla lista che abbiamo recuperato prima del "for"
    lista.append(elemento);
}