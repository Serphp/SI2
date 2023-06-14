import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../../trpc";


export const userRouter = createTRPCRouter({
  singupUser: publicProcedure
    .input(z.object({
      name: z.string().nullable(),
      email: z.string().email(),
    }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.user.create({
        data: {
          email: input.email,
          name: input.name ? input.name : undefined
        }
      })
    }),

  getUser: publicProcedure
    .input(z.object({
      id: z.number(),
      email: z.string()
    }))
    .query(async ({ input,ctx }) => {
      return ctx.prisma.user.findUnique({
        where: {
          id: input.id,
          email: input.email
        },
        include: {
          posts: true,
        }
      })}
    ),

    editProfile: publicProcedure
    .input(z.object({

      userId: z.number(),
      email: z.string().email(),
      name: z.string(),
      lastname: z.string(),
      age: z.number(),
      bio: z.string(),
      location: z.string(),
      avatar: z.string(),
      //date: z.date(),
    }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.user.update({
        where: {
          id: input.userId,
          email: input.email
        },
        data: {
          name: input.name ? input.name : undefined,
          lastname: input.lastname ? input.lastname : undefined,
          age: input.age ? input.age : undefined,
          bio: input.bio ? input.bio : undefined,
          location: input.location ? input.location : undefined,
          avatar: input.avatar ? input.avatar : undefined,
          //date: input.date ? input.date : undefined,
          User: {
            connect: {
              id: input.userId  // Usar "userId" en lugar de "email"
            }
          }
        }
      })
    }),
});