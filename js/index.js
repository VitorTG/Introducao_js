var titulo = document.querySelector(".titulo");
titulo.textContent = "Iniciando no JS 1.1";

var preciso = 19.1*1.7+13.1*1.3+4*3+11.1*1.3+9*1.1+5.6*0.9+0.7*0.5+2.6*2.4+
1.5*4*4+3*13*4+7.5*3.9+0.6*0.9*2+1.25*1.8*6+1.25*2.5*6+2.5*2.4+
13*1.2;
console.log(preciso);

var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    console.log(paciente);

    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    var pesoval = true;
    var alturaval = true;

if (peso<=0 || peso>300){
    var aux1 = ("Peso invalido");
    pesoval = false;
    console.log(aux1);
    tdIMC.textContent = aux1;
    paciente.style.backgroundColor = "red";

}

if (altura<0 || altura>3){
    var aux2 = ("Altura invalida");
    alturaval = false;
    console.log(aux2);
    tdIMC.textContent = aux2;
    paciente.style.backgroundColor = "red";

}
if (alturaval && pesoval){
    var IMC = peso / (altura * altura);
    tdIMC.textContent = IMC.toFixed(2);
}
}
var botao = document.querySelector("#adicionar-paciente");
    botao.addEventListener("click", function(){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    var IMC = peso / (altura * altura);

    

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = IMC.toFixed(2);
    
    
 

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    console.log(pacienteTr);
    var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);


    



});

