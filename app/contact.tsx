"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// pages/contact.tsx
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold text-center mb-4">Kontak Kami</h2>
      <form className="space-y-4">
        {/* Nama */}
        <motion.div whileFocus={{ scale: 1.05 }}>
          <label className="block text-gray-700">Nama</label>
          <input
            type="text"
            name="name"
            placeholder="Masukkan Nama Anda"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        {/* Email */}
        <motion.div whileFocus={{ scale: 1.05 }}>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Masukkan Email Anda"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        {/* Pesan */}
        <motion.div whileFocus={{ scale: 1.05 }}>
          <label className="block text-gray-700">Pesan</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tulis pesan Anda di sini..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        {/* Tombol Kirim */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white p-2 rounded-lg font-semibold shadow-md hover:bg-blue-700"
        >
          Kirim
        </motion.button>
      </form>
    </motion.div>
  );
}
