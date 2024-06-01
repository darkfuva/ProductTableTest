import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let userObj = {
    username: "emilys",
    password  : "emilyspass", 
    expiresInMins: 30
  };
  useEffect(() => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj),
    })
      .then((res) => res.json())
      .then(console.log);
  }, []);
  return <div>
    <h1>Login</h1>
    
    </div>;
}
