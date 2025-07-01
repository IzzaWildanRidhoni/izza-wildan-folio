import { Code, Database, Globe, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "Next.js", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Bootstrap", level: 95 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
    {
      title: "Backend Development",
      icon: Code,
      skills: [
        { name: "Laravel", level: 85 },
        { name: "Codeigniter", level: 82 },
        { name: "API Development", level: 88 },
        { name: "Authentication", level: 80 },
      ],
    },
    {
      title: "Database Management",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Database Design", level: 88 },
      ],
    },
    {
      title: "Tools & Others",
      icon: Settings,
      skills: [
        { name: "Git/GitHub/Gitlab", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Figma", level: 75 },
        { name: "Linux/Ubuntu", level: 80 },
      ],
    },
  ];

  const certifications = [
    "Certified Programmer (BNSP)",
    "Frontend & Backend Expert",
    "Network & Programming",
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="gradient-text">Keahlian Teknis</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Teknologi dan tools yang saya kuasai dalam pengembangan aplikasi
              web modern
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="p-6 bg-gray-800/30 border-gray-700 glass-effect hover:bg-gray-800/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-lg mr-4">
                    <category.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-poppins">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-gray-700"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center font-poppins">
              Sertifikasi & Prestasi
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-4 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border-purple-500/30 glass-effect text-center hover:from-purple-900/50 hover:to-cyan-900/50 transition-all duration-300"
                >
                  <p className="text-white font-medium">{cert}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
