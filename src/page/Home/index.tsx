import React from "react";
import { http } from "@/utils/index";

export const Home = () => {
  // axios实例调用
  const send = async () => {
    try {
      const data = await http.get("/api/abc");
      console.log("data:", data);
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <div>
      <button onClick={send}>send</button>
    </div>
  );
};
