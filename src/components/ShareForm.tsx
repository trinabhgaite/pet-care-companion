import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Dog, Cat, Bird, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShareFormProps {
  onSubmit: (content: string, petType: string) => Promise<void>;
  isLoading: boolean;
}

const petTypes = [
  { id: "dog", label: "Dog", icon: Dog },
  { id: "cat", label: "Cat", icon: Cat },
  { id: "other", label: "Other", icon: Bird },
];

export function ShareForm({ onSubmit, isLoading }: ShareFormProps) {
  const [content, setContent] = useState("");
  const [selectedPet, setSelectedPet] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    await onSubmit(content, selectedPet || "pet");
    setContent("");
    setSelectedPet("");
  };

  return (
    <Card className="shadow-card border-0 overflow-hidden">
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Pet Type Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-muted-foreground">
              What kind of pet? (optional)
            </label>
            <div className="flex flex-wrap gap-3">
              {petTypes.map((pet) => (
                <button
                  key={pet.id}
                  type="button"
                  onClick={() => setSelectedPet(selectedPet === pet.id ? "" : pet.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-full border-2 transition-all duration-200",
                    selectedPet === pet.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                  )}
                >
                  <pet.icon className="h-4 w-4" />
                  <span className="font-medium">{pet.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Text Input */}
          <div className="space-y-3">
            <label className="text-lg font-semibold text-foreground">
              What's happening with your pet?
            </label>
            <Textarea
              placeholder="Tell us what's going on... Is your pet acting differently? Do you have a question about their care?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[160px] text-base bg-muted/30 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 resize-none rounded-xl"
              disabled={isLoading}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!content.trim() || isLoading}
            size="lg"
            className="w-full h-14 text-lg font-semibold shadow-soft hover:shadow-elevated transition-all duration-300 rounded-xl"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Getting help...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Get PawBot's Help
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
