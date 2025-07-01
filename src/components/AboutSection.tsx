
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="gradient-text">Tentang Saya</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Full Stack Developer dengan passion dalam menciptakan solusi digital yang inovatif dan berkualitas tinggi
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl glass-effect flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">IR</span>
                    </div>
                    <p className="text-gray-400">Professional Photo</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-600/20 rounded-full blur-xl" />
              </div>
            </div>

            {/* About Content */}
            <div className="animate-fade-in">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Halo! Saya <span className="text-cyan-400 font-semibold">Izza Wildan Ridhoni</span>, 
                  lulusan S1 Informatika dari IST AKPRIND Yogyakarta yang bersertifikasi sebagai 
                  Certified Programmer dari BNSP.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Saya memiliki pengalaman sebagai Full Stack Web Developer di berbagai perusahaan 
                  dan proyek freelance. Keahlian saya mencakup pengembangan front-end dan back-end, 
                  pengelolaan basis data, serta koordinasi media digital.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Saya menikmati tantangan teknologi baru, bekerja efisien dalam tim, dan beradaptasi 
                  cepat dengan lingkungan kerja yang dinamis.
                </p>

                {/* Key Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <Card className="p-4 bg-gray-800/30 border-gray-700 glass-effect">
                    <div className="text-center">
                      <GraduationCap className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">Pendidikan</h4>
                      <p className="text-sm text-gray-400">S1 Informatika</p>
                      <p className="text-xs text-gray-500">IST AKPRIND</p>
                    </div>
                  </Card>

                  <Card className="p-4 bg-gray-800/30 border-gray-700 glass-effect">
                    <div className="text-center">
                      <Award className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">Sertifikasi</h4>
                      <p className="text-sm text-gray-400">Certified</p>
                      <p className="text-xs text-gray-500">Programmer BNSP</p>
                    </div>
                  </Card>

                  <Card className="p-4 bg-gray-800/30 border-gray-700 glass-effect">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">Lokasi</h4>
                      <p className="text-sm text-gray-400">Central Java</p>
                      <p className="text-xs text-gray-500">Indonesia</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
