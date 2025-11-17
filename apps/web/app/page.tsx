import dotenv from "dotenv";
dotenv.config();
import client from "@repo/db/client";

export default async function Home() {
  const user =await client.user.findFirst() ;
  return (
   <div>
     <h1>Hello World</h1>
     <p>{user?.username}</p>
     <p>{user?.password}</p>
   </div>
  );
}
