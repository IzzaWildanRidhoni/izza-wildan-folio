import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Staff IT & Fullstack Web Developer",
      company: "PT Shoenary Javanesia Inc",
      period: "Mar 2024 – Sekarang",
      location: "Indonesia",
      description:
        "Perancangan dan implementasi solusi web, dukungan infrastruktur, serta optimasi aplikasi internal.",
      type: "current",
    },
    {
      title: "Freelance Web Developer",
      company: "PT Aptiv Components Indonesia",
      period: "Feb 2025 – Mar 2025",
      location: "Remote",
      description: "Membangun Website Quality Control Perusahaan Manufaktur.",
      type: "past",
    },
    {
      title: "Media Coordinator",
      company: "Corps Dakwah Masjid Syuhada",
      period: "Jan 2022 – Sekarang",
      location: "Yogyakarta",
      description:
        "Mengelola konten digital, koordinasi media sosial, dan produksi media visual untuk mendukung kegiatan dakwah.",
      type: "current",
    },
    {
      title: "Database Lab Assistant",
      company: "IST AKPRIND",
      period: "Oct 2023 – Dec 2023",
      location: "Yogyakarta",
      description:
        "Membantu dalam pengajaran dan praktikum database management systems.",
      type: "past",
    },
    {
      title: "Fullstack Web Developer",
      company: "PT Baracipta Esa Engineering & ECC.co.id",
      period: "Aug 2023 – Dec 2023",
      location: "Indonesia",
      description:
        "Pengembangan aplikasi web full-stack dengan fokus pada efisiensi dan user experience.",
      type: "past",
    },
    {
      title: "Front-End/Back-End Developer",
      company: "Dicoding Indonesia",
      period: "Feb 2023 – Jun 2023",
      location: "Remote",
      description:
        "Mengembangkan komponen front-end dan back-end dalam program  Studi Independent Kampus Merdeka",
      type: "past",
    },
    {
      title: "Web Developer",
      company: "PT GIT Solution",
      period: "Jan 2019 – Apr 2019",
      location: "Yogyakarta",
      description:
        "Membuat website untuk perusahaan dengan menggunakan HTML, CSS, dan JavaScript.",
      type: "past",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="gradient-text">Pengalaman Profesional</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Perjalanan karir sebagai Full Stack Developer di berbagai
              perusahaan dan proyek
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-cyan-600 to-purple-600 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full border-4 border-background hidden md:block" />

                  {/* Experience Card */}
                  <Card className="ml-0 md:ml-20 p-6 bg-gray-800/30 border-gray-700 glass-effect hover:bg-gray-800/50 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 font-poppins">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-400 font-semibold text-lg">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Current Job Badge */}
                    {exp.type === "current" && (
                      <div className="mt-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                          <Briefcase className="h-3 w-3 mr-1" />
                          Sedang Berlangsung
                        </span>
                      </div>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
