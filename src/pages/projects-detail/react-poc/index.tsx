import Background from "@/sections/case-study/Background/Background";
import Details from "@/sections/case-study/Details/Details";
import Hero from "@/sections/case-study/Hero/Hero";
import Overview from "@/sections/case-study/Overview/Overview";
import Outcome from "@/sections/case-study/Outcome/Outcome";
import MyRole from "@/sections/case-study/MyRole/MyRole";
import TakeAway from "@/sections/case-study/TakeAway/TakeAway";

export default function ReactPocProject() {
  return (
    <div className="mb-30">
      <Hero />
      <Overview />
      <Background />
      <Details />
      <Outcome />
      <MyRole />
      <TakeAway />
    </div>
  );
}
