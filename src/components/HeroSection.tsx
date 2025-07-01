import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 my-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in">
            <p className="text-cyan-400 text-lg mb-4 font-medium">
              👋 Halo, saya
            </p>
          </div>

          {/* Name */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-4">
              <span className="gradient-text">Izza Wildan</span>
              <br />
              <span className="text-white">Ridhoni</span>
            </h1>
          </div>

          {/* Title */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Full Stack Web Developer
            </p>
            <p className="text-lg text-gray-400 mb-8">
              S.Kom. • Certified Programmer (BNSP)
            </p>
          </div>

          {/* Description */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Lulusan Informatika dengan pengalaman mengembangkan aplikasi web
              modern. Berfokus pada solusi full-stack yang efisien dan
              user-friendly.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-12"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToAbout}
            >
              Lihat Portfolio
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg rounded-xl transition-all duration-300"
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="animate-fade-in flex justify-center gap-6"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="https://linkedin.com/in/izza-wildan-ridhoni"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-full hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-300 glass-effect"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800/50 rounded-full hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-300 glass-effect"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:izzawildan@example.com"
              className="p-3 bg-gray-800/50 rounded-full hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-300 glass-effect"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
