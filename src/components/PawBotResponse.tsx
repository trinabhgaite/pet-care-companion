import { Bot, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PawBotResponseProps {
  response: string;
  urgency?: string;
}

export function PawBotResponse({ response, urgency = "Low" }: PawBotResponseProps) {
  const getUrgencyConfig = (level: string) => {
    switch (level) {
      case "High":
        return {
          icon: AlertTriangle,
          color: "text-health-high",
          bgColor: "bg-health-high/10",
          label: "Urgent - Consider seeing a vet soon",
        };
      case "Medium":
        return {
          icon: Info,
          color: "text-health-medium",
          bgColor: "bg-health-medium/10",
          label: "Monitor closely",
        };
      default:
        return {
          icon: CheckCircle,
          color: "text-health-low",
          bgColor: "bg-health-low/10",
          label: "Looking good!",
        };
    }
  };

  const config = getUrgencyConfig(urgency);
  const UrgencyIcon = config.icon;

  return (
    <Card className="shadow-card border-0 overflow-hidden animate-slide-up">
      <div className="gradient-hero h-1" />
      <CardContent className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary/10">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <span className="font-semibold text-foreground">PawBot says...</span>
          </div>
          <div className={cn("flex items-center gap-1.5 px-3 py-1 rounded-full text-sm", config.bgColor, config.color)}>
            <UrgencyIcon className="h-4 w-4" />
            <span className="font-medium">{config.label}</span>
          </div>
        </div>

        {/* Response Content */}
        <div className="bg-muted/30 rounded-xl p-4">
          <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap">{response}</p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center">
          💡 This is AI-generated advice. For serious concerns, please consult a veterinarian.
        </p>
      </CardContent>
    </Card>
  );
}
