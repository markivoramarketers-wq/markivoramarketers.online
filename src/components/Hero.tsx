import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Markivora Marketers - Digital Marketing Excellence" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Where Creativity Meets Digital Growth</span>
          </div>

          <h1 className="font-poppins text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            Grow Your Brand.<br />
            <span className="text-gradient-gold">Dominate Social Media.</span>
          </h1>

          <p className="font-inter text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Luxury-level marketing that delivers real results. Expert social media management and SEO optimization for brands that demand excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="luxury" size="lg" className="text-base px-8 py-6 h-auto group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="premium" size="lg" className="text-base px-8 py-6 h-auto">
              Free Consultation
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {[
            { value: "500+", label: "Brands Served" },
            { value: "2M+", label: "Followers Grown" },
            { value: "150%", label: "Avg ROI Increase" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="backdrop-blur-sm bg-primary-foreground/5 border border-accent/20 rounded-2xl p-6 hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
