export interface FileNode {
  id: string;
  name: string;
  type: "file" | "folder";
  content?: string;
  children?: FileNode[];
  icon?: string;
  images?: string[];
  githubUrl?: string;
}

export const portfolioData: FileNode = {
  id: "root",
  name: "portfolio",
  type: "folder",
  icon: "📁",
  children: [
    {
      id: "about",
      name: "about.md",
      type: "file",
      icon: "📄",
      content: `<div style="display: flex; gap: 2rem; align-items: flex-start; flex-wrap: wrap;">
<div style="flex: 1; min-width: 300px;">

# About Me

Hi! My name is Ryan Nguyen (wache online) and I'm currently studying computer science at San Jose State University.

I'm interested in startups, ai augmentation as opposed to replacement, dev tools, photography, and environmental impact.

</div>
<div style="flex: 0 0 200px;">

<img src="/headshot.JPEG" alt="Ryan's Headshot" style="width: 200px; height: 200px; object-fit: cover; border-radius: 12px;" />

</div>
</div>

---

## Reach Out!
I'm always interested in just chatting about new technologies, startups, or anything at all!

- **Email**: [ryannguyenc@gmail.com](mailto:ryannguyenc@gmail.com)
- **LinkedIn**: [linkedin.com/in/ryannguyenc](https://linkedin.com/in/ryannguyenc)
- **GitHub**: [github.com/ehcaw](https://github.com/ehcaw)
- **Twitter**: [@wacheeeee](https://twitter.com/wacheeeeee)

---

*Feel free to explore my projects and experience using the file tree!*`,
    },

    {
      id: "experience",
      name: "experience",
      type: "folder",
      icon: "💼",
      children: [
        {
          id: "amazon-sde-intern",
          name: "sde-intern @ amazon.md",
          type: "file",
          icon: "👨‍💻",
          content: `# Software Development Engineer Intern
**Amazon** | *May 2025 - Aug 2025*

## What I Did
Worked on the Amazon Search team (Search Data Platform) to build a feature lineage system for the Offline Feature Store.

## How I Did It
- Developed a parsing algorithm and data model to track feature transformations
- Constructed a fully automated CI/CD pipeline to refresh lineage upon model updates
- Created a Scala API for querying feature lineage information
- Created a NextJS dashboard for visualizing feature lineage graphs

## What I Used
- React, Next.js, D3.js
- Python, Scala, Typescript
- AWS Neptune, AWS S3
- AWS Lambda, Amazon Pipelines

---

*This role was super cool and allowed me to learn about systems at scale and the importance of observability.*`,
        },
        {
          id: "ttc-fullstack-dev",
          name: "fullstack @ ttc.md",
          type: "file",
          icon: "⚡",
          content: `# Full-Stack Developer
**The Tutoring Center** | *2024 - 2025*

## What I Did
Developed and maintained a web application for managing tutoring sessions and student records.

## How I Did It
- Built responsive web applications from concept to deployment
- Closely collaborated with key stakeholders to fully implement requirements
- Maintained and optimized existing codebase
- Participated in technical planning and architecture decisions

## What I Used
- NextJS, React, Typescript, Supabase

---

*This role was my first experience working with customers so intimately and I learned how to develop with customer needs and pain points in mind.*`,
        },
        {
          id: "petanano-swe-intern",
          name: "swe-intern @ petanano.md",
          type: "file",
          icon: "⚡",
          content: `# SWE Intern
**Petanano** | *June 2023 - Sep 2023*

## What I Did
Developed optimized gradient descent and reverse kinematics algorithms for operating robot arms.

## How I Did It
- Used patented gradient descent algorithm to optimize robot arm movements by 50%
- Developed a 3 and 4 link robot arm with Dynamixel motors and 3d printed limbs
- Created a CLI to mock robot arm movements and test algorithms on a 3d plane

## Technologies Used
- Python, Numpy, Pytorch, Matplotlib, Dynamixel SDK

---

*My first robotics experience and it was really rewarding to see my software working in the real world as opposed to strictly on a screen.*`,
        },
      ],
    },
    {
      id: "projects",
      name: "projects",
      type: "folder",
      icon: "📂",
      children: [
        {
          id: "pointer",
          name: "pointer.md",
          type: "file",
          icon: "📝",
          content: `# Pointer

A Notion clone I'm building because I don't want to pay for Notion Pro.

## What I'm Building
A desktop note-taking app that does everything Notion does but with better AI features and no subscription fees.

## How I'm Building It
- Using Tiptap and NextJS for the editor and 'web' frontend
- Using Convex for real-time sync between devices
- Wrapping it in Tauri to make it a proper desktop app
- Integrating AI SDK for content generation and smart suggestions

## What I'm Using
- Next.js, React, TypeScript, Tailwind CSS
- Tauri (Rust)
- Convex
- AI SDK (Vercel)

## Features I'm Adding
- All the basic Notion stuff (blocks, databases, pages)
- AI writing assistance that's actually useful
- Quality of life features that I like (markdown support, keyboard shortcuts, etc)

---

*Building this to learn desktop development and because paying $10/month for notes feels ridiculous.*`,
          githubUrl: "https://github.com/ehcaw/pointer",
        },
        {
          id: "project-4",
          name: "toph-bot.md",
          type: "file",
          icon: "🤖",
          content: `# Toph Bot

An integrated GitHub PR review bot that actually remembers what it's looking at.

## What I'm Building
A bot that reviews pull requests and keeps context across reviews using persistent memory, instead of starting fresh every time like other bots.

## How I'm Building It
- Using Letta for memory management so the bot remembers previous conversations
- Built FastAPI webhooks to handle GitHub events
- Planning to add HelixDB for storing and searching through codebase information
- Setting up RAG for better code understanding

## What I'm Using
- Letta (memory)
- FastAPI
- GitHub webhooks
- HelixDB (planned)

---

*Tried making a code review bot for club repos and this one actually learns.*`,
          githubUrl: "https://github.com/ehcaw/toph-bot",
        },
        {
          id: "project-5",
          name: "lsclear.md",
          type: "file",
          icon: "💻",
          content: `# LSClear

A web-based Python IDE because sometimes you just need to code without installing anything.

## What I Built
A full Python development environment that runs in your browser with file persistence across sessions.

## How I Built It
- Used Monaco Editor for the code editing experience
- Built the frontend with NextJS for a smooth interface
- Set up FastAPI on a Digital Ocean instance to handle code execution
- Used Cloudflare tunnels for clean API routing
- Store user files in NeonDB so they persist between sessions

## What I Used
- Monaco Editor
- Next.js
- FastAPI
- Digital Ocean
- Cloudflare tunnels
- NeonDB

---

*Sometimes you just want to code Python without setting up a whole environment.*`,
          images: ["/lsclear/lsclear.png"],
          githubUrl: "https://github.com/ehcaw/lsclear",
        },
        {
          id: "project-6",
          name: "shelly.md",
          type: "file",
          icon: "🐚",
          content: `# Shelly

A terminal-based chatbot and code editor with basic AI agent features.

## What I Built
A TUI application that combines a chatbot with a simple code editor, all running in your terminal.

## How I Built It
- Used Textual to create the terminal user interface
- Built in basic AI agent capabilities for code assistance
- Created a simple but functional code editor within the TUI
- Integrated chat functionality for getting help while coding

## What I Used
- Textual (Python TUI framework)
- Various AI APIs for agent features

---

*Sometimes the terminal is all you need - wanted to see how much I could fit into a TUI.*`,
          images: ["/shelly/shelly1.png", "/shelly/shelly2.png"],
          githubUrl: "https://github.com/ehcaw/shelly",
        },
        {
          id: "project-7",
          name: "documix.md",
          type: "file",
          icon: "📚",
          content: `# Documix

A webapp that lets you chat with any documentation instead of endlessly scrolling through docs.

## What I Built
Index documentation from URLs or local files and then chat with them to find what you actually need.

## How I Built It
- Built the frontend with NextJS for a clean chat interface
- Used Redis for rate limiting to prevent abuse
- Indexed docs with Upstash Vector for semantic search
- Used Nomic embedding models for better document understanding
- Integrated multiple LLM options (OpenAI, Groq, Ollama) for responses

## What I Used
- Next.js
- Redis
- Upstash Vector
- Nomic embedding models
- OpenAI/Groq/Ollama

---

*Searching through documentation is painful - this makes it actually useful.*`,
          githubUrl: "https://github.com/ehcaw/documix",
        },
        {
          id: "project-8",
          name: "catdoc.md",
          type: "file",
          icon: "📖",
          content: `# CatDoc

A CLI app that automatically generates documentation for your codebase using AI.

## What I Built
Built this at HackDavis 2025 for team vibecoders - it reads your entire codebase and generates comprehensive docs automatically.

## How I Built It
- Used Ink React to create a nice CLI interface
- Leveraged Gemini 2.5's massive context window to understand whole codebases
- Built smart regeneration that only updates docs when files actually change (using file hashes)
- Added a chatbot that lets you ask questions about your code after it's indexed

## What I Used
- Ink React
- Gemini 2.5 pro
- File hashing for change detection

---

*Documentation is always outdated - this keeps it current automatically.*`,
          images: ["/catdoc/catdoc1.png", "/catdoc/catdoc2.png"],
          githubUrl: "https://github.com/ehcaw/catdoc",
        },
        {
          id: "project-9",
          name: "dashi.md",
          type: "file",
          icon: "🎤",
          content: `# Dashi

A desktop app that's basically a better Siri with actual memory.

## What I Built
Built this at CalHacks AI 2025 - a voice assistant that remembers conversations and can use tools.

## How I Built It
- Used Letta agent for persistent memory and inference
- Integrated Groq Whisper for speech-to-text
- Built a clean chat interface for when you don't want to talk
- Added tool support so the assistant can actually do things

## What I Used
- Letta
- Groq Whisper
- Tauri
- MCPs (Exa, etc.)

---

*Siri forgets everything immediately - this one actually learns from our conversations.*`,
          images: [
            "/dashi/dashi1.png",
            "/dashi/dashi2.png",
            "/dashi/dashi3.png",
          ],
          githubUrl: "https://github.com/ehcaw/dashi",
        },
        {
          id: "project-10",
          name: "splat.md",
          type: "file",
          icon: "🐛",
          content: `# Splat

A Python CLI for agentic debugging that actually suggests fixes.

## What I Built
A debugging tool that reads your trace logs, runs your files, and suggests actual code edits to fix issues.

## How I Built It
- Built a CLI that analyzes Python application trace logs
- Added file execution capabilities to understand the problem
- Implemented simple code edit suggestions based on the analysis
- Made it work as an agent that can iterate on fixes

## What I Used
- Python CLI frameworks
- Groq for bug analyis and FetchAI for edit suggestions

---

*Debugging is tedious - wanted something that could suggest actual fixes instead of just finding problems.*`,
          images: [
            "/splat/splat1.png",
            "/splat/splat2.png",
            "/splat/splat3.png",
          ],
          githubUrl: "https://github.com/ehcaw/splat",
        },
        {
          id: "project-11",
          name: "elitecode.md",
          type: "file",
          icon: "🎯",
          content: `# EliteCode

A NextJS app for practicing coding interview explanations with voice.

## What I Built
Built this at SFHacks 2023 - practice explaining coding concepts out loud with AI feedback on your explanations.

## How I Built It
- Created a speech-to-text pipeline using Whisper
- Used OpenAI 3.5 Turbo to analyze explanations and give feedback
- Added ElevenLabs for text-to-speech responses
- Built it all into a NextJS webapp for easy access

## What I Used
- Next.js
- Whisper (STT)
- OpenAI 3.5 Turbo
- ElevenLabs (TTS)

---

*Coding interviews are hard enough without fumbling through explanations - this helps you practice the talking part.*`,
          githubUrl: "https://github.com/ehcaw/sfhacks",
        },
        {
          id: "project-delta",
          name: "delta.md",
          type: "file",
          icon: "💰",
          content: `# Delta

A personal finance tracker that lets you scan screenshots from your bank accounts and automatically logs transactions.

## What I'm Building
A finance tracker that uses AI vision to parse screenshots of bank statements, credit card apps, and investment accounts — so I can stay on top of my finances without manual data entry.

## How I'm Building It
- Using OpenAI Vision API  to extract transaction data from screenshots
- Built a clean dashboard for viewing spending trends and account balances
- Auto-categorizes transactions based on merchant names
- Tracks spending over time with charts and breakdowns

## What I'm Using
- Next.js, React, TypeScript, Tailwind CSS
- OpenAI Vision API (screenshot parsing)
- Recharts (data visualization)

---

*Manually logging expenses is tedious — just screenshot your accounts and let AI do the rest.*`,
          githubUrl: "https://github.com/ehcaw/delta",
        },
      ],
    },
  ],
};
