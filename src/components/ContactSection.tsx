
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="gradient-text">Mari Berkolaborasi</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tertarik untuk bekerja sama? Saya siap membantu mewujudkan ide digital Anda menjadi kenyataan
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-white mb-8 font-poppins">Hubungi Saya</h3>
              
              <div className="space-y-6">
                <Card className="p-6 bg-gray-800/30 border-gray-700 glass-effect hover:bg-gray-800/50 transition-all duration-300">
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">izzawildan@example.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gray-800/30 border-gray-700 glass-effect hover:bg-gray-800/50 transition-all duration-300">
                  <div className="flex items-center">
                    <div className="p-3 bg-cyan-600/20 rounded-lg mr-4">
                      <Linkedin className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
                      <a 
                        href="https://linkedin.com/in/izza-wildan-ridhoni" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        /in/izza-wildan-ridhoni
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gray-800/30 border-gray-700 glass-effect hover:bg-gray-800/50 transition-all duration-300">
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Lokasi</h4>
                      <p className="text-gray-300">Central Java, Indonesia</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="animate-fade-in">
              <Card className="p-8 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border-purple-500/30 glass-effect">
                <h3 className="text-2xl font-bold text-white mb-6 font-poppins">Siap Memulai Proyek?</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                    <span>Full Stack Web Development</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                    <span>Database Design & Management</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                    <span>API Development & Integration</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                    <span>Technical Consultation</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex-1"
                    onClick={() => window.open('https://linkedin.com/in/izza-wildan-ridhoni', '_blank')}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Hubungi via LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-xl transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:izzawildan@example.com'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Email Saya
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
