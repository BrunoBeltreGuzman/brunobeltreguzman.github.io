import React from "react";

export default function Intro(prop) {
       return (
              <div>
                     <div
                            id="home"
                            className="intro route bg-image"
                            st
                            style={{ background: "rgb(22, 22, 22)" }}
                     >
                            <div className="overlay-itro"></div>
                            <div className="intro-content display-table">
                                   <div className="table-cell">
                                          <div className="container">
                                                 <h1 className="intro-title mb-4">
                                                        I am Bruno Beltre
                                                 </h1>
                                                 <br />
                                                 <br />
                                                 <h3 className="text-light">
                                                        Welcome to my developer
                                                        portfolio
                                                 </h3>
                                                 <br />
                                                 <br />
                                                 <p className="pt-3">
                                                        <a
                                                               className="btn btn-primary btn js-scroll px-4"
                                                               href="#about"
                                                               role="button"
                                                        >
                                                               Learn More
                                                        </a>
                                                 </p>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}
