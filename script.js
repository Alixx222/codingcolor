console.log("Inizio esecuzione");

let d = new Date();



console.log(d);

document.getElementById("saluto").innerHTML=d.getDate

let colori=[];


function elabora() {

    let numero = document.getElementById("inNumber").value;

    alert(numero);



    if (numero >=0 && numero <= 255){

    colori.push(numero);

        document.getElementById("outText").innerHTML = "hai inserito il numero" + numero;
        document.getElementById("outText").innerHTML +=
        "<br>" I colori inseriti sono: +colori;
        console,log(colori);
        if (colori.lenght == 3){
            newColor=string = 'rgb={(${colori[0]${colori[1]}},${colori[2]})';

        }

    } else{

        //messaggio errore div error

        document.getElementById("error").innerHTML = "il numero non è corretto"

        //comportamento

    }





}



function reset(){

    document.getElementById("inNumber").value = "";

    document.getElementById("outText").innerHTML= "Output"; //faccio il reset



}

