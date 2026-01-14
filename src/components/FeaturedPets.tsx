import { MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PetCardProps {
  name: string;
  breed: string;
  age: string;
  image: string;
  location: string;
  personality: string[];
}

const PetCard = ({ name, breed, age, image, location, personality }: PetCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group card-elevated overflow-hidden hover:shadow-elevated transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-lg font-bold text-cream">{name}</h3>
          <p className="text-sm text-cream/80">{breed} • {age}</p>
        </div>
        <button 
          onClick={() => setLiked(!liked)}
          className={cn(
            "absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors",
            liked ? "bg-accent text-accent-foreground" : "bg-card/80 hover:bg-primary hover:text-primary-foreground"
          )}
        >
          <Heart className={cn("w-4 h-4", liked && "fill-current")} />
        </button>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          {location}
        </div>
        <div className="flex flex-wrap gap-2">
          {personality.map((trait, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-sage-light text-sage"
            >
              {trait}
            </span>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full">
          Request Playdate
        </Button>
      </div>
    </div>
  );
};

const featuredPets: PetCardProps[] = [
  {
    name: "Luna",
    breed: "Border Collie",
    age: "2 years",
    image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=400&h=300&fit=crop",
    location: "0.3 miles away",
    personality: ["Energetic", "Playful", "Loves fetch"],
  },
  {
    name: "Oliver",
    breed: "Maine Coon",
    age: "4 years",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
    location: "0.5 miles away",
    personality: ["Gentle", "Indoor cat", "Cuddly"],
  },
  {
    name: "Charlie",
    breed: "French Bulldog",
    age: "1 year",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=300&fit=crop",
    location: "0.8 miles away",
    personality: ["Friendly", "Small dog friendly", "Loves treats"],
  },
  {
    name: "Milo",
    breed: "Labrador Mix",
    age: "3 years",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
    location: "1.2 miles away",
    personality: ["Calm", "Good with kids", "Trained"],
  },
];

const FeaturedPets = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-display font-bold mb-2">Pets in Your Neighborhood</h2>
          <p className="text-muted-foreground">Find playmates for your furry friend</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredPets.map((pet, index) => (
            <div
              key={index}
              className="animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PetCard {...pet} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/adoption">
            <Button variant="warm" size="lg">
              Discover More Pets
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
