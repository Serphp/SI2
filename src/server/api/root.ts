import { createTRPCRouter } from "../trpc";
import { postRouter } from "./routers/post";
import { userRouter } from "./routers/user";
import { exampleRouter } from '../api/routers/example';


export const appRouter = createTRPCRouter({
  post: postRouter,
  user: userRouter,
  example: exampleRouter
});


export type AppRouter = typeof appRouter;