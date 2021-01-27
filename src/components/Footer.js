import React from "react";
import routersFectch from "../Tools/routersFectch";

export default function Footer() {
       return (
              <div>
                     <section
                            id="blog"
                            className="myfooter blog-mf sect-pt4 route mybgdark"
                     >
                            <div className="container">
                                   <div className="row">
                                          <div className="col-sm-12">
                                                 <div className="title-box text-center">
                                                        <div>
                                                               <div className="title-box-2 pt-4 pt-md-0">
                                                                      <h5 className="title-left">
                                                                             Footer
                                                                      </h5>
                                                               </div>
                                                               <hr />
                                                               <div className="more-info">
                                                                      <ul className="list-ico">
                                                                             <li>
                                                                                    <span className="ion-ios-location"></span>
                                                                                    Republica
                                                                                    Dominicana,
                                                                                    Santo
                                                                                    Domingo
                                                                             </li>
                                                                             <li>
                                                                                    <span className="ion-email"></span>
                                                                                    bruno***@gmail.com
                                                                             </li>
                                                                      </ul>
                                                               </div>
                                                               <div className="socials">
                                                                      <ul>
                                                                             <li>
                                                                                    <a
                                                                                           href={
                                                                                                  routersFectch.github
                                                                                           }
                                                                                    >
                                                                                           <span className="ico-circle">
                                                                                                  <i className="ion-social-github"></i>
                                                                                           </span>
                                                                                    </a>
                                                                             </li>
                                                                             <li>
                                                                                    <a
                                                                                           href={
                                                                                                  routersFectch.linkedin
                                                                                           }
                                                                                    >
                                                                                           <span className="ico-circle">
                                                                                                  <i className="ion-social-linkedin"></i>
                                                                                           </span>
                                                                                    </a>
                                                                             </li>
                                                                             <li>
                                                                                    <a
                                                                                           href={
                                                                                                  routersFectch.blog
                                                                                           }
                                                                                    >
                                                                                           <span className="ico-circle">
                                                                                                  <i class="fab fa-blogger"></i>
                                                                                           </span>
                                                                                    </a>
                                                                             </li>
                                                                      </ul>
                                                               </div>
                                                               <hr />
                                                               <div>
                                                                      <p className="lead">
                                                                             ©
                                                                             Bruno
                                                                             Dev
                                                                             2021
                                                                             -
                                                                             All
                                                                             Copyright
                                                                             Reserved
                                                                      </p>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </section>
              </div>
       );
}
