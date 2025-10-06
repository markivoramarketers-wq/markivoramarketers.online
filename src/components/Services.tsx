import { Card } from "@/components/ui/card";
import { Search, Instagram, TrendingUp, Target, Palette, Megaphone } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with data-driven strategies that put your brand at the top.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Instagram,
    title: "Social Media Management",
    description: "Expert management across Instagram, TikTok, Facebook, YouTube, LinkedIn & Snapchat.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    description: "Track every metric that matters with comprehensive performance insights.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Target,
    title: "Paid Ads Management",
    description: "Maximize ROI with strategic campaigns on Meta, Google, and Snapchat.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Palette,
    title: "Branding & Creative",
    description: "Stand out with stunning visuals and cohesive brand identity design.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Megaphone,
    title: "Content Strategy",
    description: "Engaging content that converts followers into loyal customers.",
    color: "from-red-500 to-pink-500",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gradient-gold">Premium Services</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your brand across every digital platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover-lift shadow-soft border-border/50 group bg-card overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500" 
                     style={{ background: `linear-gradient(135deg, hsl(43, 75%, 53%), hsl(219, 85%, 10%))` }} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-spring`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="font-poppins text-2xl font-semibold mb-4 text-foreground group-hover:text-gradient-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
