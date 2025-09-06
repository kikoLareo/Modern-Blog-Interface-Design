import { FeaturedCarousel } from "./FeaturedCarousel";
import { CategoryChips } from "./CategoryChips";
import { RecentReviews } from "./RecentReviews";
import { InfluencerCTA } from "./InfluencerCTA";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="space-y-8 pb-8">
        <FeaturedCarousel />
        <CategoryChips />
        <RecentReviews />
        <InfluencerCTA />
      </div>
    </div>
  );
}