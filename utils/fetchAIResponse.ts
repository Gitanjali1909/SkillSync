import axios from "axios";

export const fetchAIResponse = async (message: string) => {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer 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",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://skillsync.vercel.app", // Replace with your deployed domain
        "X-Title": "SkillSync", // Site title
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat", // Use a valid model name
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = await response.json();

    const aiReply = data.choices?.[0]?.message?.content;

    return aiReply || "Sorry, I didn't get that.";
  } catch (error: any) {
    console.error("Error fetching AI response:", error);
    return "Oops! Something went wrong.";
  }
};
