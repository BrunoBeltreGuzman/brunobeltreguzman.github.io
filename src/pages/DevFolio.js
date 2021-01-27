import Intro from "../components/Intro";
import About from "../components/About";
import Repositories from "../components/Repositories";
import Contact from "../components/Contact";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import React from "react";

export default function DevFolio() {
       return (
              <div>
                     {/* Components: */}

                     <Intro></Intro>

                     <About></About>

                     <Repositories></Repositories>

                     <Contact></Contact>

                     <Feedback></Feedback>

                     <Footer></Footer>
              </div>
       );
}
