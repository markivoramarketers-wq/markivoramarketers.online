import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Zap, Rocket } from "lucide-react";

const packages = [
  {
    name: "Basic",
    icon: Zap,
    price: "$299",
    period: "/month",
    description: "Perfect for startups and small businesses",
    features: [
      "3 Social Media Platforms",
      "10 Posts per Month",
      "Basic Analytics Dashboard",
      "Monthly Strategy Call",
      "Email Support",
      "Content Calendar",
    ],
    popular: false,
  },
  {
    name: "Premium",
    icon: Crown,
    price: "$799",
    period: "/month",
    description: "For growing brands seeking dominance",
    features: [
      "5 Social Media Platforms",
      "25 Posts per Month",
      "Advanced Analytics & Reports",
      "Weekly Strategy Sessions",
      "Priority Support (24/7)",
      "Custom Content Creation",
      "Paid Ads Management (up to $5k)",
      "Influencer Partnerships",
    ],
    popular: true,
  },
  {
    name: "Elite",
    icon: Rocket,
    price: "$1,499",
    period: "/month",
    description: "White-glove service for industry leaders",
    features: [
      "All Social Media Platforms",
      "Unlimited Posts & Stories",
      "Dedicated Account Manager",
      "Daily Performance Monitoring",
      "VIP Support Line",
      "Premium Content & Video Production",
      "Unlimited Paid Ads Management",
      "Celebrity/Influencer Campaigns",
      "Crisis Management",
      "Quarterly In-Person Reviews",
    ],
    popular: false,
  },
];

const Packages = () => {
  return (
    <section className="py-24 gradient-premium relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Choose Your <span className="text-gradient-gold">Growth Package</span>
          </h2>
          <p className="font-inter text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Flexible plans designed to scale with your ambitions. Every package includes our commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <Card
                key={index}
                className={`p-8 hover-lift relative overflow-hidden ${
                  pkg.popular
                    ? "shadow-luxury border-2 border-accent bg-card scale-105"
                    : "shadow-soft border-border/30 bg-card/95"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-gold text-foreground text-xs font-bold px-4 py-2 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <div className={`inline-flex p-3 rounded-2xl ${pkg.popular ? 'gradient-gold' : 'bg-primary'} mb-4`}>
                    <Icon className={`w-8 h-8 ${pkg.popular ? 'text-foreground' : 'text-primary-foreground'}`} />
                  </div>
                  <h3 className="font-poppins text-3xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="font-inter text-sm text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="flex items-end gap-1">
                    <span className="font-poppins text-5xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-muted-foreground mb-2">{pkg.period}</span>
                  </div>
                </div>

                <Button
                  variant={pkg.popular ? "luxury" : "premium"}
                  className="w-full mb-8"
                  size="lg"
                >
                  {pkg.popular ? "Start Growing" : "Get Started"}
                </Button>

                <div className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`rounded-full p-1 ${pkg.popular ? 'bg-accent' : 'bg-primary'} flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="font-inter text-sm text-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="font-inter text-primary-foreground/70">
            Need a custom solution? <button className="text-accent font-semibold hover:underline">Contact us</button> for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;
