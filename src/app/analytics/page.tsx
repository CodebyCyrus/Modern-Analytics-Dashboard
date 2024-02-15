import { analytics } from "@/utils/analytics";
import AnalyticsDashboard from "../components/AnalyticsDashboard";

const Page = async () => {
  const pageview = await analytics.retrieveDays("pageview", 2);

  return (
    <div className="min-h-screen w-full py-12 flex justify-center items-center">
      <div className="relative w-full max-w-6xl mx-auto text-white">
        <AnalyticsDashboard />
      </div>
    </div>
  );
};

export default Page;
