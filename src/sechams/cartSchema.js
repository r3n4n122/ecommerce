import { z } from "zod";

export const validationCreateCart = (data) => {
  const validation = z.object({
    userId: z.number({
      message: "`userId` ou `products` ausentes"
    }).int().positive(),
    products: z.array(
      z.object({
        productId: z.number().int().positive(),
        quantity: z.number().int().min(1, "products` vazio ou com `quantity < 1")
      }),
    ).min(1, "`products` vazio ou com `quantity < 1`")
  })

  return validation.safeParse(data) 
}

export const validationUpdateCart = (data) => {
  const validation = z.object({
    products: z.array(
      z.object({
        productId: z.number().int().positive(),
        quantity: z.number().int().min(1, "Body inválido")
      })
    ).min(1, "Body inválido")
  })

  return validation.safeParse(data)
}