import VimeoVideo from "./components/FirstLessonPlayer";
import PodiaEmbed from "./components/PodiaEmbed";

export default function firstlesson () {
  return (
  <div className="bg-[#F8F7F3] flex flex-col items-center">
    <h1 className="text-3xl sm:text-3xl inter-font m-5 sm:mt-10 px-6 sm:px-10 font-bold navy-text text-center">
                Watch This Before You Begin Your Marriage Journey
                </h1>
  <VimeoVideo />
  <PodiaEmbed />
  </div >
  )

}