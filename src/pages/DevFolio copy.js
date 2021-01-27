import Intro from "../components/Intro";
import About from "../components/About";
import Repositories from "../components/Repositories";
import Contact from "../components/Contact";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import routersFectch from "../Tools/routersFectch";

export default function DevFolio() {
       const [error, setError] = useState(null);
       const [isLoaded, setIsLoaded] = useState(false);
       const [items, setItems] = useState([]);

       useEffect(() => {
              fetch(routersFectch.properties, {
                     headers: {
                            "Content-Type": "application/json",
                     },
                     method: "GET",
              })
                     .then((res) => res.json())
                     .then(
                            (result) => {
                                   setIsLoaded(true);
                                   setItems(result);
                            },
                            (error) => {
                                   setIsLoaded(true);
                                   setError(error);
                            }
                     );
       }, []);

       if (error) {
              return <div>Error: {error.message}</div>;
       } else if (!isLoaded) {
              return <div>Loading...</div>;
       } else {
              console.log(items);
              return (
                     <div>
                            {/* Components: */}

                            <Intro data={items}></Intro>

                            <About data={items}></About>

                            <Repositories></Repositories>

                            <Contact data={items}></Contact>

                            <Feedback></Feedback>

                            <Footer data={items}></Footer>
                     </div>
              );
       }
}
