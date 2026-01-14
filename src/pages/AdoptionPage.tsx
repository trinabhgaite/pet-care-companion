import { Layout } from "@/components/layout/Layout";
import FeaturedPets from "@/components/FeaturedPets";
import { Heart } from "lucide-react";

export default function AdoptionPage() {
  return (
    <Layout>
      <div className="py-8 sm:py-12 px-4">
        <div className="container mx-auto space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm">
              <Heart className="h-4 w-4" />
              <span>Find your perfect companion</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Pet Adoption</h1>
            <p className="text-muted-foreground max-w-md mx-auto">Browse adorable pets looking for their forever homes</p>
          </div>
        </div>
      </div>
      <FeaturedPets />
    </Layout>
  );
}
