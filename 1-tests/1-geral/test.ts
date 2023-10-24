import { users } from "../mock";
import * as geral from ".";

describe("Desafio 1 - Geral", () => {
  it.skip("Teste 1 - Retorne os números repetidos ordenados de forma crescente", () => {
    const numbers = [
      83, 56, 52, 78, 17, 70, 31, 6, 69, 67, 51, 30, 84, 95, 36, 74, 48, 73, 34,
      26, 79, 72, 13, 38, 5, 34, 89, 65, 43, 91, 34, 37, 16, 52, 53, 3, 63, 57,
      39, 23, 5, 27, 35, 42, 99, 77, 63, 4, 14, 3, 66, 51, 18, 27, 19, 47, 54,
      67, 16, 89, 40, 47, 100, 80, 78, 9, 13, 84, 68, 73, 37, 47, 84, 99, 31,
      15, 30, 98, 44, 98, 83, 43, 66, 19, 54, 48, 71, 2, 95, 50, 58, 53, 69, 23,
      30, 80, 31, 74, 33, 57,
    ];

    const resp = geral.teste1(numbers);

    expect(resp).toStrictEqual([
      3, 5, 13, 16, 19, 23, 27, 30, 31, 34, 37, 43, 47, 48, 51, 52, 53, 54, 57,
      63, 66, 67, 69, 73, 74, 78, 80, 83, 84, 89, 95, 98, 99,
    ]);
  });

  it.skip('Teste 2 - Retorne o usuário que possui sobrenome "Alvares Cabral"', () => {
    const resp = geral.teste2(users);

    expect(resp.id).toBe("07c5039e-3148-4621-ad31-30752099fd06");
  });
});
