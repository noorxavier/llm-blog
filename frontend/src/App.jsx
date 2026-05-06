import React from "react";

export default function App() {
  return (
    <div className="bg-[#0b0b0f] text-white min-h-screen scroll-smooth">

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center font-black">
              AI
            </div>

            <h1 className="text-2xl font-black tracking-tight">
              LLMVERSE
            </h1>

          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-gray-300 font-semibold">

            <a href="#home" className="hover:text-white transition">
              Home
            </a>

            <a href="#architecture" className="hover:text-white transition">
              Architecture
            </a>

            <a href="#applications" className="hover:text-white transition">
              Applications
            </a>

            <a href="#future" className="hover:text-white transition">
              Future
            </a>

            <a href="#about" className="hover:text-white transition">
              About
            </a>

          </nav>

          <button className="bg-white/10 border border-white/10 px-5 py-2 rounded-full hover:bg-white/20 transition">
            Subscribe
          </button>

        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden"
      >

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

          <div className="text-center max-w-4xl mx-auto">

            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
              FUTURE OF AI & LARGE LANGUAGE MODELS
            </span>

            <h1 className="text-6xl md:text-8xl font-black leading-tight mt-8">
              What Are
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Large Language Models?
              </span>
            </h1>

            <p className="text-gray-400 text-xl leading-relaxed mt-8 max-w-3xl mx-auto">
              Learn how Large Language Models work, how they are trained,
              their applications, advantages, limitations, and the future
              of Artificial Intelligence.
            </p>

          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-6xl mx-auto px-6">
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop"
          alt="AI"
          className="w-full h-[500px] object-cover rounded-[40px] border border-white/10"
        />
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-24">

        {/* Introduction */}
        <section className="mb-24">

          <h2 className="text-5xl font-black mb-8">
            Introduction
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Large Language Models (LLMs) are advanced Artificial Intelligence
            systems trained on massive datasets to understand and generate
            human language. These models use deep learning techniques and
            transformer neural networks to process information and generate
            human-like responses.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            Popular LLMs such as GPT, Gemini, Claude, Llama, and DeepSeek
            can write articles, generate code, summarize text, answer
            questions, and even assist in scientific research.
          </p>

        </section>

        {/* How LLMs Understand Language */}
        <section className="mb-24">

          <h2 className="text-5xl font-black mb-8">
            How LLMs Understand Human Language
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Large Language Models process text using tokens, which are small
            chunks of words or characters. Instead of understanding language
            exactly like humans, LLMs learn statistical relationships between
            words and sentences from massive datasets.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            Modern LLMs are built using Transformer neural networks introduced
            in the famous research paper “Attention Is All You Need.” These
            transformers use self-attention mechanisms to understand context,
            meaning, and relationships between words in long sequences of text.
          </p>

        </section>

        {/* Architecture */}
        <section
          id="architecture"
          className="mb-24 scroll-mt-32"
        >

          <h2 className="text-5xl font-black mb-8">
            Transformer Architecture
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            The Transformer architecture is the foundation of modern Large
            Language Models. Unlike older recurrent neural networks (RNNs),
            transformers can process words in parallel, making training much
            faster and more efficient.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            Transformers contain layers of neural networks that calculate
            attention scores between words. This helps the model determine
            which words are most important in a sentence and how they relate
            to each other contextually.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mt-10">

            <h3 className="text-3xl font-bold mb-6">
              Key Features
            </h3>

            <ul className="space-y-4 text-gray-300 list-disc pl-6">

              <li>Self-attention mechanisms</li>

              <li>Parallel processing</li>

              <li>Context understanding</li>

              <li>Token-based learning</li>

              <li>Massive parameter scaling</li>

            </ul>

          </div>

        </section>

        {/* Training */}
        <section className="mb-24">

          <h2 className="text-5xl font-black mb-8">
            How LLMs Are Trained
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <ul className="space-y-5 text-gray-300 list-disc pl-6">

              <li>Collecting massive datasets from books and websites</li>

              <li>Cleaning and preprocessing data</li>

              <li>Breaking text into tokens</li>

              <li>Training on GPUs and TPUs</li>

              <li>Fine-tuning for specialized tasks</li>

              <li>Reinforcement Learning from Human Feedback (RLHF)</li>

            </ul>

          </div>

          <p className="text-gray-400 text-lg leading-relaxed mt-8">
            Training advanced LLMs requires enormous computational power
            and billions of parameters.
          </p>

        </section>

        {/* Applications */}
        <section
          id="applications"
          className="mb-24 scroll-mt-32"
        >

          <h2 className="text-5xl font-black mb-10">
            Real-World Applications of LLMs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h3 className="text-3xl font-bold mb-4">
                AI Assistants
              </h3>

              <p className="text-gray-400 leading-relaxed">
                LLMs power intelligent assistants such as ChatGPT, Gemini,
                Claude, and Microsoft Copilot.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h3 className="text-3xl font-bold mb-4">
                Content Creation
              </h3>

              <p className="text-gray-400 leading-relaxed">
                AI can generate blogs, emails, advertisements, scripts,
                and marketing content automatically.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h3 className="text-3xl font-bold mb-4">
                Software Development
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Developers use AI coding assistants to generate code,
                debug applications, and improve productivity.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h3 className="text-3xl font-bold mb-4">
                Healthcare & Research
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Researchers use LLMs for medical analysis, document
                summarization, and scientific research assistance.
              </p>

            </div>

          </div>

        </section>

        {/* Challenges */}
        <section className="mb-24">

          <h2 className="text-5xl font-black mb-8">
            Risks & Challenges
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <ul className="space-y-5 text-gray-300 list-disc pl-6">

              <li>Hallucinations and inaccurate responses</li>

              <li>Bias in datasets and generated outputs</li>

              <li>Privacy and data security concerns</li>

              <li>High infrastructure and energy costs</li>

              <li>Misinformation and ethical risks</li>

            </ul>

          </div>

        </section>

        {/* Future */}
        <section
          id="future"
          className="mb-24 scroll-mt-32"
        >

          <h2 className="text-5xl font-black mb-8">
            Future of Large Language Models
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Future LLMs are expected to become multimodal, meaning they will
            understand text, images, audio, and video simultaneously.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            AI agents may autonomously complete tasks, perform research,
            interact with applications, and assist humans in everyday
            workflows.
          </p>

        </section>

        {/* About */}
        <section
          id="about"
          className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/10 rounded-[40px] p-10 scroll-mt-32"
        >

          <h2 className="text-5xl font-black mb-6">
            About This Blog
          </h2>

          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl">
            LLMVERSE is a modern AI blog focused on Large Language Models,
            Generative AI, AI Agents, and the future of intelligent systems.
          </p>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            <div>

              <h3 className="text-3xl font-black text-white">
                LLMVERSE
              </h3>

              <p className="text-gray-400 mt-2">
                Exploring the future of Artificial Intelligence.
              </p>

            </div>

            <div className="flex gap-8 text-gray-400 font-semibold">

              <a href="#home" className="hover:text-white transition">
                Home
              </a>

              <a href="#architecture" className="hover:text-white transition">
                Architecture
              </a>

              <a href="#applications" className="hover:text-white transition">
                Applications
              </a>

              <a href="#future" className="hover:text-white transition">
                Future
              </a>

            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}