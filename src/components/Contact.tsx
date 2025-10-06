import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 gradient-premium relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Let's Start <span className="text-gradient-gold">Growing Together</span>
          </h2>
          <p className="font-inter text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Ready to take your brand to the next level? Get in touch and let's discuss your growth strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 lg:p-10 shadow-luxury bg-card animate-fade-in">
            <h3 className="font-poppins text-2xl font-bold text-foreground mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="John" 
                    className="bg-background border-border/50 focus:border-accent"
                  />
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-background border-border/50 focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="bg-background border-border/50 focus:border-accent"
                />
              </div>

              <div>
                <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                  Phone Number
                </label>
                <Input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="bg-background border-border/50 focus:border-accent"
                />
              </div>

              <div>
                <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your project and goals..."
                  rows={5}
                  className="bg-background border-border/50 focus:border-accent resize-none"
                />
              </div>

              <Button variant="luxury" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="font-poppins text-2xl font-bold text-primary-foreground mb-6">Get in touch</h3>
              <p className="font-inter text-primary-foreground/80 leading-relaxed mb-8">
                We're here to help your brand shine. Whether you need a consultation or want to learn more about our services, we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "markivoramarketers@gmail.com",
                  link: "mailto:markivoramarketers@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+92 328 3634482",
                  link: "tel:+923283634482",
                },
                {
                  icon: MapPin,
                  title: "Office",
                  value: "Panjhati, Khairpur, Pakistan, 66020",
                  link: null,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-primary-foreground/5 border-accent/20 hover-lift backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <div className="font-inter text-sm text-primary-foreground/60 mb-1">{item.title}</div>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="font-inter text-primary-foreground font-medium hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="font-inter text-primary-foreground font-medium">{item.value}</div>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <Card className="p-6 gradient-gold border-0 shadow-gold">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <div className="font-poppins font-semibold text-foreground mb-1">Quick Response</div>
                  <div className="font-inter text-sm text-foreground/80">Chat with us on WhatsApp</div>
                </div>
                <Button 
                  variant="premium" 
                  size="sm"
                  onClick={() => window.open('https://wa.me/923283634482', '_blank')}
                >
                  Chat Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
