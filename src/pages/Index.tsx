import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PawPrint, Heart, MessageCircle, Users, ArrowRight, Sparkles } from "lucide-react";
import FeaturedPets from "@/components/FeaturedPets";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-16 sm:py-24 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-primary-foreground/90 text-sm mb-6">
            <Heart className="h-4 w-4" />
            <span>Your pet's wellbeing matters</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Care for your pet,
            <br />
            together 🐾
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Get friendly guidance for your pet questions. Share your concerns and receive helpful advice from our AI assistant PawBot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/share">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-semibold bg-white text-primary hover:bg-white/90 shadow-elevated rounded-full"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Ask PawBot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/get-started">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg font-semibold border-white/30 text-primary-foreground hover:bg-white/10 rounded-full"
              >
                <PawPrint className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-soft text-center p-6">
              <CardContent className="pt-4 space-y-3">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Share Anytime</h3>
                <p className="text-muted-foreground text-sm">
                  Tell us about your pet's situation and get instant guidance
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft text-center p-6">
              <CardContent className="pt-4 space-y-3">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Heart className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Caring Advice</h3>
                <p className="text-muted-foreground text-sm">
                  Receive warm, helpful responses tailored to your pet's needs
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft text-center p-6">
              <CardContent className="pt-4 space-y-3">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-secondary flex items-center justify-center">
                  <Users className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold text-lg">Community</h3>
                <p className="text-muted-foreground text-sm">
                  See how others care for their pets and learn together
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FeaturedPets />
    </Layout>
  );
};

export default Index;
