import dotenv from "dotenv";
dotenv.config();
import express from "express";
import client from "@repo/db/client";

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/signup" ,async  (req , res) => {
  console.log(req.body)
  const username = req.body.username
  const password = req.body.password
  
  await client.user.create({
    data: {
      username,
      password
    }
  })

  res.json({ message:"signup success"})
})

app.listen(3002, () => {
  console.log('Example app listening on port 3002!')
})