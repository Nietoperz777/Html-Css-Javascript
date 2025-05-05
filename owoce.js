const owoce = ["jabłko", "banan", "kiwi", "arbuz", "truskawka"];

function sprawdzOwoc() {
  const input = document.getElementById("fruitInput").value.toLowerCase();
  const wynik = document.getElementById("wynik");
  let znaleziono = false;

  for (let i = 0; i < owoce.length; i++) {
    if (owoce[i] === input) {
      wynik.textContent = `Znalazłem! ${i}`;
      znaleziono = true;
      break;
    }
  }

  if (!znaleziono) {
    wynik.textContent = "Nie znalazłem :(";
  }
}