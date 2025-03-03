import React from "react";
import Head from "next/head";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>CV Online</title>
      </Head>

      <header className="bg-blue-600 text-white py-6 text-center text-2xl font-bold">
        My Online CV
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-8">
        {/* About Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="mt-2">I am a passionate web developer with experience in building modern web applications.</p>
        </div>

        {/* Skills Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Services</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>SEO Optimization</li>
          </ul>
        </div>

        {/* Portfolio Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Portfolio</h2>
          <p className="mt-2">Check out my projects on GitHub.</p>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Contact</h2>
          <div className="flex space-x-4 mt-2">
            <a href="mailto:your.email@example.com" className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg">
              <Mail className="w-5 h-5 mr-2" /> Email
            </a>
            <a href="https://github.com/yourgithub" className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg">
              <Github className="w-5 h-5 mr-2" /> GitHub
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg">
              <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
