function haalwaarde() {
    num1 = parseInt(document.getElementById("nummereen").value);
    num2 = parseInt(document.getElementById("nummertwee").value);



}


function multiplyBy() {
    haalwaarde();
   let result = num1 * num2;
    document.getElementById("result").textContent = result;

    if(num1 > 0 && num2 > 0 ){ 
        document.getElementById("result").textContent = result;
        let result = num1 * num2}
else{
    document.getElementById("result").textContent = "getal is te laag.";}}

function divideBy() {
    haalwaarde();
   let result = num1 / num2;
    document.getElementById("result").textContent = result;

    if(num1 > 0 && num2 > 0 ){ 
        document.getElementById("result").textContent = result;
        let result = num1 / num2}
else{
    document.getElementById("result").textContent = "getal is te laag.";}}

function minusBy() {
    haalwaarde();
   let result = num1 - num2;
    document.getElementById("result").textContent = result;

    if(num1 > 0 && num2 > 0 ){ 
        document.getElementById("result").textContent = result;
        let result = num1 - num2}
else{
    document.getElementById("result").textContent = "getal is te laag.";}}

function plusBy() {
    haalwaarde();
   let result = num1 + num2;
    document.getElementById("result").textContent = result;

    if(num1 > 0 && num2 > 0 ){ 
        document.getElementById("result").textContent = result;
        let result = num1 + num2}
else{
    document.getElementById("result").textContent = "getal is te laag. probeer opnieuw.";}}