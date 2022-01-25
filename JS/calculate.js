/*
var validationCustom01 = document.getElementById("validationCustom01");
var validationCustom02 = document.getElementById("validationCustom02");
var hasil = document.getElementById("hasil");

function ftambah(){
    hasil.value = Number(validationCustom01.value) *Number(validationCustom02.value);
}*/

const validationCustom01 = document.getElementById('validationCustom01');
const validationCustom02 = document.getElementById('validationCustom02');
const hasil = document.getElementById('hasil');
const submit = document.getElementById('submit');

submit.addEventListener('click', function(){
    hasil.innerText = eval(validationCustom01.value * validationCustom02.value)
})


