import { ArrowDown, Users, Target, Briefcase, Clock, ChevronRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentProjects = [
    {
      title: "The Unified Public Service Platform (UPSP)",
      description: "The Unified Public Service Platform (UPSP) makes money by selling software-as-a-service (SaaS) licenses to local governments, not to citizens. The services themselves (like applying for housing, reporting an issue, etc.) are still free for citizens — the platform just improves how those services are delivered. Councils and agencies pay us to provide the technology infrastructure, because it saves them money, improves service quality, and meets their digital transformation goals.",
      status: "Active",
      completion: 95
    },
    {
      title: "Enterprise AI Solutions",
      description: "Developing next-generation artificial intelligence systems for enterprise-level automation and decision making.",
      status: "In Development",
      completion: 75
    },
    {
      title: "Digital Infrastructure Platform",
      description: "Building scalable cloud infrastructure solutions that enable seamless digital transformation for businesses.",
      status: "Active",
      completion: 90
    },
    {
      title: "Data Analytics Suite",
      description: "Comprehensive analytics platform providing real-time insights and predictive modeling capabilities.",
      status: "Testing Phase",
      completion: 85
    }
  ];

  const upcomingProjects = [
    {
      title: "Quantum Computing Research",
      description: "Exploring quantum computing applications for complex optimization problems in various industries.",
      timeline: "Q2 2025",
      category: "Research"
    },
    {
      title: "Sustainable Tech Initiative",
      description: "Developing eco-friendly technology solutions to reduce carbon footprint in digital operations.",
      timeline: "Q3 2025",
      category: "Innovation"
    },
    {
      title: "Global Expansion Platform",
      description: "Creating tools and frameworks to help businesses expand internationally with ease.",
      timeline: "Q4 2025",
      category: "Development"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">OXODONIA</div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('upcoming')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Upcoming
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              OXODONIA
            </h1>
            <div className="w-24 h-1 bg-foreground mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Pioneering innovation through cutting-edge technology solutions that transform businesses and shape the future.
            </p>
          </div>
          
          <Button 
            onClick={() => scrollToSection('about')}
            variant="outline" 
            size="lg"
            className="group border-2 hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Discover Our Story
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Innovation Meets Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Oxodonia is a forward-thinking technology company dedicated to creating revolutionary solutions that drive digital transformation. We combine deep technical expertise with innovative thinking to deliver exceptional results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of visionary engineers, designers, and strategists work collaboratively to push the boundaries of what's possible in technology.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">
                    World-class professionals with decades of combined experience in cutting-edge technologies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Precision Focus</h3>
                  <p className="text-muted-foreground">
                    Strategic approach to innovation, ensuring every solution addresses real-world challenges.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enterprise Ready</h3>
                  <p className="text-muted-foreground">
                    Scalable solutions designed for enterprise-level deployment and integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Ideas Into Reality
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in developing innovative technology solutions that drive business growth and operational excellence across multiple industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">AI & Machine Learning</CardTitle>
                <CardDescription>
                  Advanced artificial intelligence solutions that automate processes and enhance decision-making capabilities.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Cloud Infrastructure</CardTitle>
                <CardDescription>
                  Scalable cloud-native platforms that provide robust, secure, and efficient digital infrastructure.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Data Analytics</CardTitle>
                <CardDescription>
                  Comprehensive analytics solutions that transform raw data into actionable business insights.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Active Initiatives
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our current portfolio showcases innovative projects that are actively shaping the future of technology.
            </p>
          </div>
          
          <div className="space-y-8">
            {currentProjects.map((project, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-3">{project.status}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{project.completion}%</div>
                      <div className="text-sm text-muted-foreground">Complete</div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="mt-4">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-foreground h-2 rounded-full transition-all duration-500"
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects Section */}
      <section id="upcoming" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Future Innovations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exciting projects on the horizon that will further establish our position at the forefront of technological advancement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">{project.category}</div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {project.timeline}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex items-center text-sm font-medium group-hover:text-foreground transition-colors">
                    Learn More
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to transform your business with innovative technology solutions? Contact us to discuss your project.
            </p>
            
            <div className="flex items-center justify-center space-x-3 text-lg">
              <Mail className="h-5 w-5" />
              <a 
                href="mailto:info@oxodonia.co.uk" 
                className="text-foreground hover:text-muted-foreground transition-colors underline"
              >
                info@oxodonia.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="text-3xl font-bold mb-4">OXODONIA</div>
          <p className="text-muted-foreground mb-8">
            Pioneering the future through innovative technology solutions.
          </p>
          <div className="w-24 h-1 bg-foreground mx-auto"></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
