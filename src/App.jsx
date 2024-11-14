import About from "./components/About";
import Hero from "./components/Hero";
import LenisWrapper from "./components/LenisWraper";
import ProjectShowcase from "./components/ProjectShowcase";
import Testimonial from "./components/Testimonial";
import TextMarquee from "./components/TextMarquee";
import WhatIDo from "./components/WhatIDo";
import WorkExperience from "./components/WorkExperience";

import RecentProjects from "./components/RecentProjects";

function App() {
  return (
    <div>
      <LenisWrapper>
        <Hero />
        <TextMarquee />
        <About />
        {/* <WhatWeDo /> */}
        <WhatIDo />
        <RecentProjects />
        <WorkExperience />
        <Testimonial />
        <ProjectShowcase />
      </LenisWrapper>
    </div>
  );
}

export default App;
