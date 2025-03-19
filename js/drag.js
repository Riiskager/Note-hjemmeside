/** Formål: Gør elementer draggable
 * Indbyggede funktioner
 * dataTransfer.setData() - gemmer det trukkede elements ID
 * data.Transfer.getData() - henter dette når det bliver droppet
 * targat.appendChild() - flytter det til den nye lokation
 */

function allowDrop(ev){ //selvangivet navn fra HTML
    ev.preventDefault() //Normalt kan elementer ikke "droppes", men det har du slået fra her
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id) //ev.target.id er elementet der bliver trukket i
    //gemmer elementet som "text" data, som kan blive hentet herunder:
}

function drop(ev){ //i denne fortæller du at:
    ev.preventDefault(); //Der er tilladelse til at den kan "droppes"
    var data = ev.dataTransfer.getData("text"); //Den skal ligge "data", altså "text" ind i en anden container
    ev.target.appendChild(document.getElementById(data)); //Og her er vejen den skal tage for at finde førnævnte data(element)
}

function tæller(){
    if (typeof(Storage) !==
"undefined") {
    
    if (localStorage.clickcount && !isNaN(localStorage.clickcount)){ //Tjekker om Local.storage stemmer over ens med et tal, og hvis den gør... så er den et tal.
    localStorage.clickcount = 
    Number(localStorage.clickcount) + 1;

} else{
    localStorage.clickcount = 1;
}

document.getElementById("resultat").innerHTML // InnerHTML med besked, med funktion internt
= "Du har klikket " + localStorage.clickcount + " gang(e)"
}else{
document.getElementById("resultat").innerHTML = "Beklager, din browser understytter ikke web storage..." // Else, virker hvis koden ovenoever ikke virker
    }
}