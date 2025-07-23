import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/72c84dc8-6797-415e-a340-9bc768d870d7.png" 
            alt="X Creations Web Studios"
            className="mx-auto h-64 md:h-96 w-auto mb-6 drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
          Creative Web Solutions
          <span className="block text-transparent bg-gradient-primary bg-clip-text mt-2">
            That Stand Out
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your digital presence with stunning, responsive websites that capture your brand's essence and drive results.
        </p>
        
        <div className="flex justify-center">
          <Button variant="vibrant" size="lg" className="text-lg px-8 py-6">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;