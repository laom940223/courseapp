import { adminProcedure, createTRPCRouter, publicProcedure } from "../trpc";
import {z } from "zod"

export const courseRouter = createTRPCRouter({


    getAllCourses: publicProcedure
            .query( async ({ctx})=>{

              
                const courses =  ctx.prisma.course.findMany({ take:20 })

                return courses

            }),

    createCourse: adminProcedure
            .input(
                z.object({
                    name: z.string().min(8).max(200),
                    price: z.number().positive(),
                    description: z.string().min(8).max(200),
                    heroImage :  z.string().min(8).max(200),
                })
            )
            .mutation(async ( { input, ctx })=>{


                const { description, heroImage, name, price} = input

                const createdCourse = await ctx.prisma.course.create({data:{

                    description, heroImage, name, price, teacher_id:ctx.auth.userId!

                }})


                return createdCourse

            })
            






})


// name              String
// price             Float
// description       String
// heroImage         String
// teacher_id        String