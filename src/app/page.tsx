import Profile from "./components/Profile";
import Introduce from "./components/Introduce";
import TechSkill from "./components/TechSkill";

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <Profile />
        <Introduce />
        <TechSkill />
      </div>
    </div>
  )
}