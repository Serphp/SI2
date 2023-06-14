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

      //id: z.number(),
      email: z.string().email(),
      name: z.string(),
      lastname: z.string(),
      age: z.number(),
      bio: z.string(),
      location: z.string(),
      //date: z.date(),
      //avatar: z.string(),
      //portada: z.string(),
    }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.profile.create({
        // where: {
        //   id: input.id,
        // },
        data: {

          name: input.name,
          lastname: input.lastname,
          age: input.age,
          bio: input.bio,
          location: input.location,
          //avatar: input.avatar,
          //portada: input.portada,
          //date: input.date ? input.date : undefined,
          user: {
            connect: {
              email: input.email
            }
          }
        }
      })
    }),
});