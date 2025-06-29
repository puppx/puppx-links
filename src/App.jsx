function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-10 shadow-2xl max-w-md w-full text-center text-white animate-fade-in-up">
        <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
          👋 Welcome to Your Portfolio
        </h1>
        <p className="text-lg text-white/90 mb-6">
          React + Vite + Tailwind CSS — all set up and looking good.
        </p>
        <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-purple-100 transition-all duration-300">
          Let's Build 🚀
        </button>
      </div>
    </div>
  );
}

export default App;