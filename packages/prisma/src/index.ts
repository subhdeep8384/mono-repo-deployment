import dotenv from "dotenv"
dotenv.config()
import { PrismaClient } from "@prisma/client"



const client = new PrismaClient()
export default client

