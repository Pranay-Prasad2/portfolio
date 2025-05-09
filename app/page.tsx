import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/UI/FloatingNav";
import WorkExp from "@/components/WorkExp";
import { navItems } from "@/Data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems}/> */}
        <Hero/>
        <Grid/>
        <RecentProject/>
        <WorkExp/>
        <Footer/>
      </div>
    </main>
  );
}
