"use client";
import React, { useState } from "react";
import openai from "../lib/chatgpt";

function ChatBox() {
  const [prompt, setPrompt] = useState("");
  const generateResponse = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("api/generateAnswer", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
  };
  return (
    <div>
      <form onSubmit={generateResponse} className="p-5 space-x-5">
        <input
          className="border-2 border-gray-300 bg-gray-800h-10 pr-16 px-5 rounded-lg focus:outline-none text-sm"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Write your question here..."
        />
        <button
          className="bg-blue-500  hover:bg-blue-700 font-bold rounded py-2 px-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ChatBox;
