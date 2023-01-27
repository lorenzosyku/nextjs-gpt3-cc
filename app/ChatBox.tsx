"use client";
import React, { useState } from "react";
import openai from "../lib/chatgpt";

function ChatBox() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const generateResponse = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("api/generateAnswer", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const { answer } = await response.json();
    setAnswer(answer);
  };
  return (
    <div>
      <form onSubmit={generateResponse} className="p-5 flex space-x-5">
        <input
          className="border-2 flex-1 border-gray-300 bg-gray-800 h-10 pr-16 px-5 rounded-lg focus:outline-none text-sm "
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
      {answer && (
        <div className="">
          <h2>GPT-3: {answer}</h2>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
