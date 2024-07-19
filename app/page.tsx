import NavBar from "@/components/NavBar";
import HeroV2 from "@/components/HeroV2";
import Cards from "@/components/Cards";
import Questions from "@/components/Questions";
import CourseOverview from "@/components/CourseOverview";
import AboutInstructor from "@/components/AboutInstructor";
import { Component } from "@/components/Stats";
import { Component2 } from "@/components/Stats2";


export default function Home() {
  return (
    <div className="bg-[#F8F7F3]">

      <NavBar/>
      <HeroV2 />
      <Cards />
      <Questions />
      <CourseOverview />


      {/* <div className="p-10 flex flex-row items-center justify-center  gap-2">
      
       <Component  />
       </div>
      <div className="pl-[15rem] pr-[15rem]" >
       <Component2 />
       </div> */}
      
       <AboutInstructor />
     </div>
  );
}
