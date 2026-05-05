import { z } from "zod";

export const productQuerySchema = z.object({
  limit: z.coerce.number().min(1).max(20).default(10),
  page: z.coerce.number().min(1).default(1),
  category: z.string().optional(),
  search: z.string().optional(),
});
