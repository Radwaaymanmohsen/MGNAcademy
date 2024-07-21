import HeroV2 from "@/components/HeroV2";
import Cards from "@/components/Cards";
import Questions from "@/components/Questions";
import CourseOverview from "@/components/CourseOverview";
import AboutInstructor from "@/components/AboutInstructor";


export default function Home() {
  return (
    <div className="bg-[#F8F7F3]">
      <HeroV2 />
      <Cards />
      <Questions />
      <CourseOverview />
      <AboutInstructor />
     </div>
  );
}
