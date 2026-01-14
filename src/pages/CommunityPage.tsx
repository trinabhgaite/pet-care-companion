import { Layout } from "@/components/layout/Layout";
import { CommunityPost } from "@/components/CommunityPost";
import { Users } from "lucide-react";

const mockPosts = [
  { id: "1", content: "My golden retriever has been scratching a lot lately. Any tips for dry skin?", author_name: "Dog parent", created_at: new Date(Date.now() - 3600000).toISOString(), aiResponse: "Dry skin in dogs can be caused by several factors including dry weather, allergies, or diet. Try adding omega-3 fatty acids to their food, use a humidifier, and consider using a gentle oatmeal-based shampoo. If it persists, consult your vet!" },
  { id: "2", content: "How often should I clean my cat's litter box?", author_name: "Cat lover", created_at: new Date(Date.now() - 7200000).toISOString(), aiResponse: "Great question! Scoop the litter box at least once daily, and do a complete litter change every 1-2 weeks. Wash the box with mild soap monthly. Cats are very clean animals and may avoid a dirty box!" },
  { id: "3", content: "My puppy won't stop biting everything. Is this normal?", author_name: "New pet owner", created_at: new Date(Date.now() - 86400000).toISOString(), aiResponse: "Yes, this is completely normal puppy behavior! Puppies explore the world with their mouths and also go through teething. Redirect biting to appropriate chew toys, and use positive reinforcement when they choose toys over furniture." },
];

export default function CommunityPage() {
  return (
    <Layout>
      <div className="py-8 sm:py-12 px-4">
        <div className="container max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm">
              <Users className="h-4 w-4" />
              <span>Pet parents helping each other</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Community</h1>
            <p className="text-muted-foreground max-w-md mx-auto">See what other pet parents are asking and how PawBot helped</p>
          </div>

          <div className="space-y-4">
            {mockPosts.map((post) => (
              <CommunityPost key={post.id} id={post.id} content={post.content} authorName={post.author_name} createdAt={post.created_at} aiResponse={post.aiResponse} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
