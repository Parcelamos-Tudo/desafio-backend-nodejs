import * as bank from ".";
import { users } from "../mock";

describe("Desafio 2 - Bank", () => {
  it.skip("Teste 1 - Retorne o saldo de conta do usuário", () => {
    const user_id = "f83cbc43-c3a9-4f61-8bb0-cd9eb53507dc";

    const resp = bank.teste1(users, user_id);

    expect(resp).toBe(2574.61);
  });

  it.skip("Teste 2 - Aprove a operação de pagamento se, e somente se, o usuário enviar senha correta e o valor for menor ou igual ao saldo da conta", () => {
    const info = {
      password: "UXQxLrSjZ",
      amount: 1580,
      user_id: "315f7d4c-1c19-43b9-bf76-082f0c001529",
    };

    const resp = bank.teste2(users, info);

    expect(resp.success).toBeTruthy();
  });

  it.skip("Teste 3 - Reprove a operação de pagamento se, e somente se, o usuário enviar senha incorreta ou o valor for maior ao saldo da conta", () => {
    const info = {
      password: "cMQ0XHui9WQt",
      amount: 4000,
      user_id: "157c1ac1-3d48-4649-8395-6d9054891b5b",
    };

    const resp = bank.teste2(users, info);

    expect(resp.success).toBeFalsy();
    expect(resp.message).toBe("Saldo insuficiente");
  });

  it.skip("Teste 4 - Reprove a operação de pagamento se, e somente se, o usuário enviar senha incorreta ou o valor for maior ao saldo da conta", () => {
    const info = {
      password: "apsoAOKDaposdKA",
      amount: 3000,
      user_id: "157c1ac1-3d48-4649-8395-6d9054891b5b",
    };

    const resp = bank.teste2(users, info);

    expect(resp.success).toBeFalsy();
    expect(resp.message).toBe("Senha incorreta");
  });
});
