

    var btnSqr = document.getElementById('btnsqr');
    btnSqr.onclick = function () {
        Calculator.resultScreen.value = Math.sqrt(Calculator.resultScreen.value);
    };

    var btnCe = document.getElementById('btnce');
    btnCe.onclick = function () {
        Calculator.resultScreen.value = ' ';
    };

    var btnCancel = document.getElementById('btncan');
    btnCancel.onclick = function () {
        Calculator.resultScreen.value =' ';
    };

    var btnBackspace = document.getElementById('btnback');
    btnBackspace.onclick = function () {
        Calculator.resultScreen.value = Calculator.resultScreen.value.slice(0,-1);
    };


    var btn7 = document.getElementById('btn7');

    btn7.onclick = function () {
        Calculator.resultScreen.value +='7';
    };

    var btn8 = document.getElementById('btn8');
    btn8.onclick = function () {
        Calculator.resultScreen.value +='8';
    };

    var btn9 = document.getElementById('btn9');
    btn9.onclick = function () {
        Calculator.resultScreen.value +='9';
    };

    var btnPlus = document.getElementById('btn+');
    btnPlus.onclick = function () {
        Calculator.resultScreen.value +='+';
    };

    var btn4 = document.getElementById('btn4');
    btn4.onclick = function () {
        Calculator.resultScreen.value +='4';
    };

    var btn5=document.getElementById('btn5');
    btn5.onclick = function () {
        Calculator.resultScreen.value +='5';
    };

    var btn6 = document.getElementById('btn6');
    btn6.onclick = function () {
        Calculator.resultScreen.value +='6';
    };

    var btnMinus = document.getElementById('btn-');
    btnMinus.onclick = function () {
        Calculator.resultScreen.value +='-';
    };

    var btn1 = document.getElementById('btn1');
    btn1.onclick = function () {
        Calculator.resultScreen.value +='1';
    };

    var btn2 = document.getElementById('btn2');
    btn2.onclick = function () {
        Calculator.resultScreen.value +='2';
    };

    var btn3 = document.getElementById('btn3');
    btn3.onclick = function () {
        Calculator.resultScreen.value +='3';
    };

    var btnMultiplication = document.getElementById('btn*');
    btnMultiplication.onclick = function () {
        Calculator.resultScreen.value +='*';
    };

    var btnZero = document.getElementById('btn0');
    btnZero.onclick = function () {
        Calculator.resultScreen.value+='0';
    };

    var btnDot = document.getElementById('btn.');
    btnDot.onclick = function () {
        Calculator.resultScreen.value +='.';
    };

    var btnEquel = document.getElementById('btn=');
    btnEquel.onclick = function () {
        Calculator.resultScreen.value = eval(Calculator.resultScreen.value);
    };

    var btnDivision = document.getElementById('btn/');
    btnDivision.onclick = function () {
        Calculator.resultScreen.value +='/';
    };