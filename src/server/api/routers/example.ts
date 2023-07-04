import { z } from "zod";
import { createTRPCRouter, privateProcedure, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),




  greeting: privateProcedure
    .input(z.object({ name: z.string()  }))
    .query(({ input })=>{

      return  { greeting: `Helllo ${input.name}`  }
    })
});
