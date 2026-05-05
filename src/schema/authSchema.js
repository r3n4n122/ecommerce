import { z } from "zod";

export const validationLogin = (data) => {
  const schema = z.object({
    username: z
      .string({
        message: "Parâmetro username é obrigatório"
      })
      .min(1, "Parâmetro username é obrigatório"),
      
    password: z
      .string({
        message: "Parâmetro password é obrigatório"
      })
      .min(1, "Parâmetro password é obrigatório"),
  });

  return schema.safeParse(data);
};
