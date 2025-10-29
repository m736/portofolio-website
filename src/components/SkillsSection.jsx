import { useState } from "react";
import { cn } from "@/lib/utils";
const skills = [
  { name: "Html", level: 90, category: "frontend" },
  { name: "Css", level: 90, category: "frontend" },
  { name: "Javascript", level: 80, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },

  { name: "Nodejs", level: 60, category: "backend" },
  { name: "Express", level: 60, category: "backend" },
  { name: "SQL", level: 50, category: "backend" },
  { name: "Mongo", level: 50, category: "backend" },

  { name: "Github", level: 80, category: "tools" },
  { name: "VScode", level: 80, category: "tools" },
  { name: "NPM", level: 70, category: "tools" },
];
const categories = ["all", "frontend", "backend", "tools"];
const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const fillterdSkills = skills.filter(
    (skill) => activeCategory == "all" || skill.category == activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {" "}
          My<span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => {
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bd-secondary"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 ">
          {fillterdSkills.map((skill, key) => {
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                    style={{ width: skill.level + "%" }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span>{skill.level}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
