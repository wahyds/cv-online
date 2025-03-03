export default function Home() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-white text-black p-10">

      {/* Foto Profil */}
      <img
        src="/profile.jpg"
        alt="Foto Profil"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
      />

      {/* Nama dan Deskripsi */}
      <h1 className="text-3xl font-bold mt-4">Wahyudin sapari</h1>
      <p className="text-lg mt-1">Web Developer | UI/UX Designer</p>

      {/* Kontak */}
      <div className="mt-4 flex space-x-4">
        <a href="mailto:emailkamu@gmail.com" className="hover:text-gray-300">
          📧 wahyudeadzone830@gmail.com.com
        </a>
        <span>📍 Jakarta, Indonesia</span>
      </div>

      {/* Social Media */}
      <div className="mt-5 flex space-x-4">
        <a href="https://linkedin.com/in/username" target="_blank">
          <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition" />
        </a>
        <a href="https://github.com/wahyds" target="_blank">
          <img src="/Github.png" alt="GitHub" className="w-8 h-8 hover:scale-110 transition" />
        </a>
      </div>
    </div>
  );
}
