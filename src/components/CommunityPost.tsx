import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, ThumbsUp } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";

interface CommunityPostProps {
  id: string;
  content: string;
  authorName: string;
  createdAt: string;
  aiResponse?: string;
}

export function CommunityPost({
  content,
  authorName,
  createdAt,
  aiResponse,
}: CommunityPostProps) {
  const [helpful, setHelpful] = useState(false);

  return (
    <Card className="shadow-soft border-0 overflow-hidden hover:shadow-card transition-shadow duration-300">
      <CardContent className="p-5 space-y-4">
        {/* User Post */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">
                {authorName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <span className="font-medium text-foreground">{authorName}</span>
              <span className="text-xs text-muted-foreground ml-2">
                {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
              </span>
            </div>
          </div>
          <p className="text-foreground/90 leading-relaxed pl-10">{content}</p>
        </div>

        {/* PawBot Response */}
        {aiResponse && (
          <div className="pt-4 border-t border-border/50 space-y-2">
            <div className="flex items-center gap-2 pl-2">
              <div className="p-1.5 rounded-full bg-accent/10">
                <Bot className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                PawBot replied
              </span>
            </div>
            <div className="bg-muted/30 rounded-xl p-4 ml-2">
              <p className="text-sm text-foreground/85 leading-relaxed line-clamp-4">
                {aiResponse}
              </p>
            </div>
          </div>
        )}

        {/* Interaction */}
        <div className="flex items-center gap-2 pt-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setHelpful(!helpful)}
            className={cn(
              "text-muted-foreground hover:text-foreground",
              helpful && "text-primary hover:text-primary"
            )}
          >
            <ThumbsUp className={cn("h-4 w-4 mr-1.5", helpful && "fill-current")} />
            {helpful ? "Helpful!" : "This helped"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
