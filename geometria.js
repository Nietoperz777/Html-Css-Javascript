function poleTrojkata() {
    var a = parseFloat(document.getElementById('a').value);
    var h = parseFloat(document.getElementById('h').value);
    var pole = (a * h) / 2;
    document.getElementById('P1').innerHTML = pole.toFixed(2);
}

function obwodTrojkata() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);
    var obwod = a + b + c;
    document.getElementById('Ob1').innerHTML = obwod.toFixed(2);
}

function poleProstokata() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var pole = a * b;
    document.getElementById('P2').innerHTML = pole.toFixed(2);
}

function obwodProstokata() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var obwod = 2 * (a + b);
    document.getElementById('Ob2').innerHTML = obwod.toFixed(2);
}

function poleKola() {
    var h = parseFloat(document.getElementById('h').value);
    var pole = Math.PI * h * h;
    document.getElementById('P3').innerHTML = pole.toFixed(2);
}

function obwodKola() {
    var h = parseFloat(document.getElementById('h').value);
    var obwod = 2 * Math.PI * h;
    document.getElementById('Ob3').innerHTML = obwod.toFixed(2);
}

function poleTrapezu() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var h = parseFloat(document.getElementById('h').value);
    var pole = ((a + b) * h) / 2;
    document.getElementById('P4').innerHTML = pole.toFixed(2);
}

function obwodTrapezu() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);
    var obwod = a + b + 2 * c;
    document.getElementById('Ob4').innerHTML = obwod.toFixed(2);
}

function obliczC() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = Math.sqrt(a * a + b * b);
    document.getElementById('c').value = c.toFixed(2);
}
