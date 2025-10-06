import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechVision",
    avatar: "SJ",
    rating: 5,
    content: "Sterling SEO transformed our social media presence. We've seen a 300% increase in engagement and our brand has never looked better. Their team is professional, creative, and delivers results.",
  },
  {
    name: "Michael Chen",
    role: "Founder, StyleHub",
    avatar: "MC",
    rating: 5,
    content: "The ROI from their paid ads campaigns exceeded all expectations. They don't just run ads—they craft strategic campaigns that convert. Best investment we've made in our marketing.",
  },
  {
    name: "Emma Williams",
    role: "CMO, GrowthCo",
    avatar: "EW",
    rating: 5,
    content: "Working with Sterling SEO feels like having an extension of our team. They understand our brand, our audience, and consistently deliver content that resonates. Highly recommend!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful brands who trust us with their digital growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover-lift shadow-soft border-border/50 relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon background */}
              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-accent/5 group-hover:text-accent/10 transition-colors" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="font-inter text-foreground/90 leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-accent/30">
                    <AvatarFallback className="gradient-gold text-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-poppins font-semibold text-foreground">{testimonial.name}</div>
                    <div className="font-inter text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D", "E"].map((letter, i) => (
                <Avatar key={i} className="w-8 h-8 border-2 border-background">
                  <AvatarFallback className="text-xs bg-primary text-primary-foreground">{letter}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="font-inter">
              Trusted by <span className="font-semibold text-foreground">500+ brands</span> worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
