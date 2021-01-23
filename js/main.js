function clicou(){
document.getElementById("agradecimento"). innerHTML = "Obrigado por clicar";

    //alert("obrigado por apertar!")
}

function redirecionar(){
   window.open("https://pt.wikipedia.org/wiki/Brasil");
    //Redireciona uma pag  window.location.href="https://pt.wikipedia.org/wiki/Brasil"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse"
    //alert ("trocar texto");
    elemento.innerHTML ="Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui"
    elemento.innerHTML ="Obrigado por passar o mouse"

}

function load(){
    alert ("pagina carregada! ");
}
function funcaoChange(elemeto){
    console.log(elemento.value);
}

/*
function soma(n1,n2){
    return n1 + n2;
}

alert (soma(5, 10));
 */

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for (count=0; count <= 5; count++){
    alert(count);
}

*/

/*
var count = 0;
while (count <=5){
    console.log(count);
    alert(count);
    count++;

};

*/
/*
var idadde = prompt("Qual sua idade");
if (idade => 18 ){
    alert("maior de idade");
} else{
    alert("menor de idade");
}
*/


/*
var frutas = [{ nome:"maça", cor: "vermelha"},{ nome:"uva", cor: "roxa"}] 
console.log(frutas);
alert (frutas[1].name);
*/


/*
var fruta = { nome :"maça", cor:"vermelha"}
console.log (fruta);
alert (fruta.cor) 
*/
//var lista=("maçã", "uva", "laranja")
//lista.push("banana");
//lista.pop();

//console.log(lista);
//console.log(lista.tostring());
//console.log(lista.join)("-"));

//var nome = "Caique Silva";
//var n1 = 5;
//var n2 = 3;
//var frase= "Japão é melhor time do mundo ";
//var console.log(frase.replace("Japão" , "Brasil"));


