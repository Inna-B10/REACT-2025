/**
 * Denne funksjonen illustrerer litt hvordan
 * React genererer JSXen. Funksjonen kjøres
 * igjennom en gang og React bruker resultatet
 * til å finne ut om DOMet trengs å oppdateres.
 *
 * Men på lik linje at den update() funksjonen
 * som er her ikke kan endre på text variablen
 * etter den er generert, så vil ikke du kunne
 * oppdatere HTML etter at React har kjørt igjennom
 * funksjonen (React Komponenten).
 *
 * Vi må ha en egen metode for å sende meldinger
 * til React for å informere om at en endring er
 * skjedd og hva den nye verdien er.
 */
function counter() {
  let count = 0;

  const text = `current count = ${count}`;

  function update() {
    count++;
    console.log("Current count", count);
  }

  return {
    text,
    update,
  };
}

// testA.text endres ikke selv om update oppdaterer count
// variablen korrekt
const testA = counter();
console.log(testA.text);
testA.update();
testA.update();
testA.update();
console.log(testA.text);
