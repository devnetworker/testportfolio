export default function TechSkill() {
  const skills = [
    { name: "JS", color: "from-yellow-400 to-orange-500" },
    { name: "TS", color: "from-blue-400 to-blue-600" },
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "Tailwindcss", color: "from-teal-400 to-emerald-500" },
    { name: "Premierepro", color: "from-purple-400 to-pink-500" }
  ]

  return (
    <section className="w-full max-w-3xl mx-auto p-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2 text-white">Tech Skill</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className={`px-4 py-2 rounded-full bg-gradient-to-r ${skill.color} text-white font-medium shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  )
} 
