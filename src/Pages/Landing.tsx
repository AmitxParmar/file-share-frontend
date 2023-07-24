import Achievements from "@/components/LandingPage/Achievement";
import Features from "@/components/LandingPage/Features";
import Interest from "@/components/LandingPage/Interest";
import LandingSection from "@/components/LandingPage/LandingSection";
import Review from "@/components/LandingPage/Review";
import SneakPeeks from "@/components/LandingPage/SneakPeek";
import Suggestions from "@/components/LandingPage/Suggestion";

const Landing = () => {
  return (
    <>
      <LandingSection />
      <Achievements />
      <Features />
      <SneakPeeks />
      <Interest />
      <Suggestions />
      <Review />
    </>
  );
};

export default Landing;
