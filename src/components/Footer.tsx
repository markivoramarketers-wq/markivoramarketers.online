import { Instagram, Facebook, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-hero text-primary-foreground py-16 border-t border-accent/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-poppins text-2xl font-bold mb-4 text-gradient-gold">Markivora Marketers</h3>
            <p className="font-inter text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Your Brand Deserves the Spotlight. We deliver luxury-level marketing with real, measurable results.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/markivora_marketers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-smooth hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5 text-accent" />
              </a>
              <a
                href="https://www.facebook.com/share/1B8v3H5vhS/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-smooth hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5 text-accent" />
              </a>
              <a
                href="https://www.tiktok.com/@markivora_marketers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-smooth hover:-translate-y-1"
              >
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@markivora_marketers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-smooth hover:-translate-y-1"
              >
                <Youtube className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold mb-4 text-accent">Services</h4>
            <ul className="space-y-3 font-inter text-sm">
              {["SEO Optimization", "Social Media Management", "Paid Ads", "Branding & Design", "Content Strategy"].map(
                (item, index) => (
                  <li key={index}>
                    <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-poppins font-semibold mb-4 text-accent">Company</h4>
            <ul className="space-y-3 font-inter text-sm">
              {["About Us", "Case Studies", "Blog", "Careers", "Contact"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-sm text-primary-foreground/60">
            © {currentYear} Markivora Marketers. All rights reserved.
          </p>
          <div className="flex gap-6 font-inter text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
