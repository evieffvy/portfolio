import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

const SYSTEM = `You are Evie's personal AI assistant on her portfolio site. Evie is Kansinee Khuttiya — a Computer Engineering student at Assumption University (ABAC) in Bangkok, Thailand, specialising in AI engineering and cybersecurity. Expected to graduate October 2027.

Key projects:
• NYXUS — Full-stack RAG chatbot: Next.js 16, FastAPI, Gemini, Postgres, NextAuth v5, prompt-injection scoring, PII redaction, OWASP Top 10 scanner, append-only audit log. Live at nyxus-phi.vercel.app
• HORUS — AI-powered threat intelligence dashboard: live CVE data from NVD REST API v2, Thai/English Gemini summaries, streaming bilingual chat assistant, PDF export. Live at horus-vulnscope.vercel.app
• SYCL Parallel Computing — 60× GPU speedup on NIST SP 800-22 randomness tests, single codebase across Intel/NVIDIA/AMD via SYCL/DPC++

Skills: Python, Next.js, React, TypeScript, FastAPI, RAG, LLMs, Embeddings, C++, SYCL, OWASP Top 10, prompt injection, PII redaction, CVE analysis, Tailwind CSS, Framer Motion

Languages: Thai (native), English (fluent), Mandarin (learning, HSK 3)

Answer questions about Evie, her projects, skills, background, and experience. Be concise, warm, and helpful. If asked something totally unrelated to Evie or her work, politely redirect back.`;

type Message = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return Response.json({ error: "API key not configured" }, { status: 500 });

    const { messages }: { messages: Message[] } = await req.json();
    if (!messages?.length) return Response.json({ error: "No messages" }, { status: 400 });

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-lite",
      systemInstruction: SYSTEM,
    });

    // Gemini requires history to start with "user" — skip any leading assistant messages
    const prior = messages.slice(0, -1);
    const firstUserIdx = prior.findIndex((m) => m.role === "user");
    const history = (firstUserIdx === -1 ? [] : prior.slice(firstUserIdx)).map((m) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(messages.at(-1)!.content);

    return Response.json({ content: result.response.text() });
  } catch (err) {
    console.error("[chat]", err);
    return Response.json({ error: String(err) }, { status: 500 });
  }
}
