window.onload = function () {
    document.getElementById('oblicz').onclick = function () {
        let a = parseInt(document.getElementById('a').value);
        let b = parseInt(document.getElementById('b').value);

        if (isNaN(a) || isNaN(b)) {
            document.getElementById('wynik').innerText = "Wprowadź poprawne liczby.";
            return;
        }

        while (b !== 0) {
            let r = a % b;
            a = b;
            b = r;
        }

        document.getElementById('wynik').innerText = "NWD: " + a;
    };
};
