import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  PawPrint, 
  MessageCircle, 
  Users, 
  Heart, 
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Check,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface GetStartedProps {
  onComplete?: () => void;
  isModal?: boolean;
}

const onboardingSteps = [
  {
    icon: PawPrint,
    title: "Welcome to PawSquare! 🐾",
    description: "Your friendly pet care companion. We're here to help you take the best care of your furry friends with AI-powered guidance and a supportive community.",
    tip: "PawSquare combines artificial intelligence with real pet care knowledge to give you instant, helpful advice.",
  },
  {
    icon: MessageCircle,
    title: "Ask PawBot Anything",
    description: "Have a question about your pet? Just share what's happening and PawBot will provide friendly, helpful guidance tailored to your situation.",
    tip: "Describe your pet's behavior, symptoms, or any concerns - the more details, the better advice you'll receive!",
  },
  {
    icon: Users,
    title: "Join the Community",
    description: "Connect with other pet parents! See what others are asking, share your experiences, and learn from the community's collective wisdom.",
    tip: "Browse community posts to find answers to common questions or share your own success stories.",
  },
  {
    icon: Heart,
    title: "Find Your Perfect Match",
    description: "Looking to adopt? Browse adorable pets in your area, save your favorites, and connect with local shelters and foster families.",
    tip: "Use filters to find pets that match your lifestyle, living situation, and experience level.",
  },
  {
    icon: Sparkles,
    title: "You're All Set!",
    description: "You're ready to start your PawSquare journey! Remember, we're always here to help with any pet care questions you may have.",
    tip: "Pro tip: Bookmark PawSquare so you can quickly get help whenever you need it!",
  },
];

export function GetStarted({ onComplete, isModal = false }: GetStartedProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    localStorage.setItem("pawsquare-onboarding-complete", "true");
    onComplete?.();
  };

  const step = onboardingSteps[currentStep];
  const StepIcon = step.icon;
  const isLastStep = currentStep === onboardingSteps.length - 1;

  return (
    <div className={cn(
      "w-full max-w-2xl mx-auto",
      isModal && "p-4"
    )}>
      <Card className="shadow-elevated border-0 overflow-hidden">
        {/* Progress bar */}
        <div className="h-1 bg-muted">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentStep + 1) / onboardingSteps.length) * 100}%` }}
          />
        </div>

        <CardContent className="p-6 sm:p-8">
          {/* Dismiss button for modal */}
          {isModal && (
            <div className="flex justify-end -mt-2 -mr-2 mb-4">
              <Button variant="ghost" size="icon" onClick={handleComplete}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Step indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {onboardingSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-200",
                  index === currentStep
                    ? "bg-primary w-8"
                    : index < currentStep
                    ? "bg-primary/50"
                    : "bg-muted-foreground/30"
                )}
              />
            ))}
          </div>

          {/* Step content */}
          <div className="text-center space-y-6 animate-fade-in" key={currentStep}>
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10">
              <StepIcon className="h-10 w-10 text-primary" />
            </div>

            {/* Title & Description */}
            <div className="space-y-3">
              <h2 className="text-2xl font-display font-bold text-foreground">
                {step.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                {step.description}
              </p>
            </div>

            {/* Tip */}
            <div className="bg-muted/50 rounded-xl p-4 max-w-md mx-auto">
              <p className="text-sm text-muted-foreground">
                💡 <span className="font-medium">Tip:</span> {step.tip}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
            <Button
              variant="ghost"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <span className="text-sm text-muted-foreground">
              {currentStep + 1} of {onboardingSteps.length}
            </span>

            <Button
              onClick={handleNext}
              className="gap-2"
            >
              {isLastStep ? (
                <>
                  <Check className="h-4 w-4" />
                  Get Started
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
