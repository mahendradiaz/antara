/*
var validationCustom01 = document.getElementById("validationCustom01");
var validationCustom02 = document.getElementById("validationCustom02");
var hasil = document.getElementById("hasil");

function hasil(){
    hasil.value = Number(validationCustom01.value) *Number(validationCustom02.value);
}*/

// const validationCustom01 = document.getElementById('validationCustom01');
// const validationCustom02 = document.getElementById('validationCustom02');
// const hasil = document.getElementById('hasil');
// const submit = document.getElementById('submit');

// submit.addEventListener('click', function(){
//     hasil.innerText = eval(validationCustom01.value * validationCustom02.value)
// })

function formatMoney(amount, decimalSeparator, thousandsSeparator, nDecimalDigits){  
    var num = parseFloat( amount ); //convert to float  
    //default values  
    decimalSeparator = decimalSeparator || '.';  
    thousandsSeparator = thousandsSeparator || ',';  
    nDecimalDigits = nDecimalDigits == null? 2 : nDecimalDigits;  
  
    var fixed = num.toFixed(nDecimalDigits); //limit or add decimal digits  
    //separate begin [$1], middle [$2] and decimal digits [$4]  
    var parts = new RegExp('^(-?\\d{1,3})((?:\\d{3})+)(\\.(\\d{' + nDecimalDigits + '}))?$').exec(fixed);   
  
    if(parts){ //num >= 1000 || num < = -1000  
        return parts[1] + parts[2].replace(/\d{3}/g, thousandsSeparator + '$&') + (parts[4] ? decimalSeparator + parts[4] : '');  
    }else{  
        return fixed.replace('.', decimalSeparator);  
    }  
}  


const validationCustom01 = document.getElementById('validationCustom01');
const validationCustom02 = document.getElementById('validationCustom02'); 
const hasil = document.getElementById('hasil');
// const hasil2 = document.getElementById('hasil2');
const submit = document.getElementById('submit');

document.getElementById("submit").addEventListener("click", event => {
    document.getElementById("hasil").innerText = formatMoney(Number(validationCustom01.value) * Number(2.700) + Number(validationCustom02.value));
    // document.getElementById("hasil2").innerText = formatMoney(document.getElementById("hasil").value);

// submit.addEventListener('click', function(){
//     hasil.innerText = Number(validationCustom01.value) *Number(2.700) +Number(validationCustom02.value);
})



// var rupiah = document.getElementById('hasil');
// rupiah.addEventListener('keyup', function(e){
//     rupiah.value = formatRupiah(this.value, 'Rp. ');

// })

// function formatRupiah(angka, prefix){
//     var number_string = angka.replace(/[^,\d]/g, '').tostring(),
//     split = number_string.split(','),
//     sisa = split[0].length % 3,
//     rupiah = split[0].substr(0, sisa),
//     ribuan = split[0].substr(sisa).match(/\d{3}/gi);

//     if (ribuan) {
//         separator = sisa ? '.' : '';
//         rupiah += separator + ribuan.join('.');
//     }

//     rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
//     return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
// }