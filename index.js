const prompt = require("prompt-sync")();

let personas = [];

while (true) {
  let nombre = prompt("Ingrese nombre (o 'fin' para terminar): ");

  if (nombre === "fin") {
    break;
  }

  let edad = parseInt(prompt("Ingrese edad: "));
  let nota = parseFloat(prompt("Ingrese nota: "));

  personas.push([nombre, edad, nota]);
}

console.log("\nLista de personas ingresadas:");
console.log(personas);

let ordenadas = [...personas].sort((a, b) => b[2] - a[2]);

console.log("\nLista ordenada por nota (mayor a menor):");
console.log(ordenadas);

let suma = 0;
for (let p of personas) {
  suma += p[2];
}

let promedio = suma / personas.length;
console.log("\nPromedio de notas:", promedio);
