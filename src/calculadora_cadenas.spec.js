import calcular from "./calculadora.js";

describe("Sumar", () => {
  it("deberia sumar numeros en una cadena", () => {
    expect(calcular("")).toEqual(0);
  });
});
