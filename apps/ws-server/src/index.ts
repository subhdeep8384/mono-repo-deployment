import  { WebSocketServer } from "ws"
import client  from "@repo/db/client";

const server = new WebSocketServer({
    port: 3001
})

server.on("connection" ,async (ws) => {
    const user = await client.user.create({
        data:{
            username:"test___"+ Math.random().toString(),
            password:"test@password___"+ Math.random().toString()
        }
    })
    ws.send(JSON.stringify(user))
    ws.send("HI there you are connected")
})