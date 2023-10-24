import { User } from "../mock";

export function teste1(users: User[], user_id: string): number {
  return 0;
}

export function teste2(users: User[], info: ITest2): Test2Response {
  return {
    success: false,
    message: "",
  };
}

type ITest2 = {
  password?: string;
  amount?: number;
  user_id: string;
};

type Test2Response = {
  success: boolean;
  message?: string;
};
