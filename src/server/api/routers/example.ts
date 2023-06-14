import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getAllUser: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),

  getUser: publicProcedure.query(({ ctx }) => {
    const user = ctx.prisma.user.findUnique; // Suponiendo que tienes el ID del usuario en la sesión
  
    return ctx.prisma.user.findUnique({
      where: {
        id: user.name,
      },
      select: {
        id: true,
        name: true,
        email: true,
        posts: true,
      },
    });
  }),

  
  getfullUser: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany({
      include: {
        posts: true,
      },
    });
  }),
  

  getOne: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.example.findUnique({
        where: {
          id: String(input.id),
        },
      });
    }),
  

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
