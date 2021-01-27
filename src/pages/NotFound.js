import React from "react";
import tools from "../Tools/toolsFolio";
export default function NotFound() {
       tools.removeNav();
       tools.feebackButton();
       return (
              <div>
                     <div
                            id="404"
                            className="intro route bg-image"
                            st
                            style={{ background: "rgb(22, 22, 22)" }}
                     >
                            <div className="overlay-itro"></div>
                            <div className="intro-content display-table">
                                   <div className="table-cell">
                                          <div className="container text-center">
                                                 <h1 className="text-light">
                                                        Opss!! &#128533;
                                                 </h1>
                                                 <h1 className="display-4 text-light">
                                                        Error 404 Not Found
                                                 </h1>
                                                 <br />
                                                 <br />
                                                 <p className="pt-3">
                                                        <a
                                                               className="btn btn-primary btn js-scroll px-4"
                                                               href="/"
                                                               role="button"
                                                        >
                                                               Go To Home
                                                        </a>
                                                 </p>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}
