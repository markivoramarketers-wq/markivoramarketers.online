import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp, Lightbulb, Target } from "lucide-react";

const blogPosts = [
  {
    icon: TrendingUp,
    title: "10 Instagram Growth Hacks for 2024",
    excerpt: "Discover the latest strategies to explode your Instagram following and engagement rates.",
    date: "Jan 15, 2024",
    category: "Social Media",
    readTime: "5 min read",
  },
  {
    icon: Target,
    title: "Mastering Google Ads: A Complete Guide",
    excerpt: "Learn how to create high-converting ad campaigns that maximize your ROI.",
    date: "Jan 12, 2024",
    category: "Paid Ads",
    readTime: "8 min read",
  },
  {
    icon: Lightbulb,
    title: "SEO Trends That Will Dominate This Year",
    excerpt: "Stay ahead of the curve with these essential SEO strategies for modern brands.",
    date: "Jan 10, 2024",
    category: "SEO",
    readTime: "6 min read",
  },
];

const Blog = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 animate-fade-in">
          <div>
            <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Latest <span className="text-gradient-gold">Insights</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl">
              Stay updated with the latest marketing trends, tips, and strategies.
            </p>
          </div>
          <Button variant="luxury" className="flex-shrink-0">
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const Icon = post.icon;
            return (
              <Card
                key={index}
                className="group hover-lift shadow-soft border-border/50 overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon header */}
                <div className="p-8 pb-6 gradient-premium relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center group-hover:scale-110 transition-spring">
                      <Icon className="w-7 h-7 text-foreground" />
                    </div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-6">
                  <h3 className="font-poppins text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
