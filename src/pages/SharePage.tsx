import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ShareForm } from "@/components/ShareForm";
import { PawBotResponse } from "@/components/PawBotResponse";
import { useToast } from "@/hooks/use-toast";
import { Heart } from "lucide-react";

const mockResponses = [
  "It sounds like your pet might be experiencing some anxiety. Try creating a calm, quiet space for them with their favorite toys. Consistent routines can also help reduce stress. If symptoms persist for more than a few days, consider consulting with your veterinarian.",
  "Based on what you've described, this could be normal behavior for your pet's age and breed. Make sure they're getting enough exercise and mental stimulation. Interactive toys and puzzle feeders can be great for keeping them engaged!",
  "I understand your concern! This is actually quite common. Ensure your pet has access to fresh water and a balanced diet. If you notice any changes in appetite or energy levels, it's always a good idea to schedule a check-up with your vet.",
];

export default function SharePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAIResponse] = useState<string | null>(null);
  const [urgency, setUrgency] = useState<string>("Low");
  const { toast } = useToast();

  const handleSubmit = async (content: string, petType: string) => {
    setIsLoading(true);
    setAIResponse(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
    const urgencies = ["Low", "Medium", "High"];
    const randomUrgency = urgencies[Math.floor(Math.random() * 2)]; // Mostly Low/Medium

    setAIResponse(randomResponse);
    setUrgency(randomUrgency);
    setIsLoading(false);

    toast({ title: "PawBot is here to help! 🐾" });
  };

  return (
    <Layout>
      <div className="py-8 sm:py-12 px-4">
        <div className="container max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
              <Heart className="h-4 w-4" />
              <span>We're here to help</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Tell us about your pet
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Share what's happening and get friendly guidance from PawBot
            </p>
          </div>

          <ShareForm onSubmit={handleSubmit} isLoading={isLoading} />

          {aiResponse && <PawBotResponse response={aiResponse} urgency={urgency} />}
        </div>
      </div>
    </Layout>
  );
}
