import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Zap, Smartphone, Search, Globe } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Tailor-made websites built with the latest technologies for optimal performance and scalability."
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Stunning visual designs that capture your brand identity and engage your target audience effectively."
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Websites that look and function perfectly across all devices, from desktop to mobile."
  },
  {
    icon: Zap,
    title: "Fast Loading",
    description: "Optimized websites with lightning-fast loading speeds for better user experience and SEO."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Built-in SEO best practices to help your website rank higher in search engine results."
  },
  {
    icon: Globe,
    title: "Domain & Hosting",
    description: "Complete setup including domain registration, hosting configuration, and ongoing maintenance."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-transparent bg-gradient-primary bg-clip-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive web solutions to bring your digital vision to life with creativity and technical excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-primary w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;