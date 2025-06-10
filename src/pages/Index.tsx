
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white snowdonia-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo on top-left */}
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/f93c6ff4-598c-47fe-ac72-5d11c838aedc.png" 
                alt="Oxodonia Logo" 
                className="h-10 w-auto animate-bounce-gentle"
              />
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: "hero", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "projects", label: "Projects" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:animate-bounce-gentle ${
                      activeSection === item.id
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Pioneering Innovation Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Technology
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Oxodonia is a forward-thinking technology company creating revolutionary solutions 
            that drive digital transformation through AI, cloud infrastructure, and data analytics.
          </p>
          <div className="space-x-4">
            <Button 
              onClick={() => scrollToSection("projects")} 
              size="lg" 
              className="animate-bounce-gentle transform hover:scale-110 transition-all duration-300"
            >
              Explore Our Work
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")} 
              variant="outline" 
              size="lg"
              className="animate-bounce-gentle transform hover:scale-110 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transforming Ideas Into Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in cutting-edge technology solutions that empower businesses 
              to thrive in the digital age. Our expertise spans artificial intelligence, 
              cloud computing, and advanced data analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-bounce-gentle">
              <CardHeader>
                <CardTitle className="text-blue-600">Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We push the boundaries of what's possible, constantly exploring new 
                  technologies and methodologies to deliver breakthrough solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-bounce-gentle">
              <CardHeader>
                <CardTitle className="text-purple-600">Client-Centric</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every solution is tailored to our clients' unique needs, ensuring 
                  maximum value and seamless integration with existing systems.
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-bounce-gentle">
              <CardHeader>
                <CardTitle className="text-green-600">Future-Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our solutions are built to scale and adapt, ensuring they remain 
                  relevant and powerful as technology continues to evolve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Current Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the innovative solutions we're building today that will shape tomorrow's digital landscape.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-bounce-gentle">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">The Unified Public Service Platform (UPSP)</CardTitle>
                <CardDescription className="text-lg">
                  Government Digital Transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  The Unified Public Service Platform (UPSP) makes money by selling software-as-a-service (SaaS) licenses to local governments, not to citizens. The services themselves (like applying for housing, reporting an issue, etc.) are still free for citizens — the platform just improves how those services are delivered. Councils and agencies pay us to provide the technology infrastructure, because it saves them money, improves service quality, and meets their digital transformation goals.
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-bounce-gentle">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">AI-Powered Analytics Engine</CardTitle>
                <CardDescription className="text-lg">
                  Next-Generation Business Intelligence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our proprietary analytics engine uses advanced machine learning algorithms 
                  to provide real-time insights and predictive analytics for enterprise clients.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Real-time Processing</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Predictive Analytics</span>
                </div>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-bounce-gentle">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Cloud Infrastructure Suite</CardTitle>
                <CardDescription className="text-lg">
                  Scalable Enterprise Solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A comprehensive cloud platform that enables businesses to deploy, 
                  manage, and scale their applications with unprecedented ease and reliability.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Auto-scaling</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Multi-cloud</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">DevOps Integration</span>
                </div>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-bounce-gentle">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">Smart IoT Management Platform</CardTitle>
                <CardDescription className="text-lg">
                  Connected Device Ecosystem
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  An intelligent platform for managing and monitoring IoT devices at scale, 
                  with advanced security features and automated optimization capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">IoT Management</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Security</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Edge Computing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Get in touch with our team of experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <span className="text-lg text-gray-700">info@oxodonia.co.uk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <span className="text-lg text-gray-700">+44 (0) 20 7946 0958</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span className="text-lg text-gray-700">London, United Kingdom</span>
                </div>
              </div>
            </div>

            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-bounce-gentle">
              <CardHeader>
                <CardTitle>Start Your Digital Transformation</CardTitle>
                <CardDescription>
                  Whether you're looking to modernize existing systems or build something entirely new, 
                  we're here to help you succeed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full transform hover:scale-105 transition-all duration-300 animate-bounce-gentle" 
                  size="lg"
                >
                  Schedule a Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Oxodonia</h3>
            <p className="text-gray-400 mb-6">
              Pioneering Innovation Through Technology
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Oxodonia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
