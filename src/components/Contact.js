import React from "react";
import ReactDOM from "react-dom";
import routersFectch from "../Tools/routersFectch";

async function sendmessage(event) {
       event.preventDefault();
       const name = event.target.name.value;
       const email = event.target.email.value;
       const subject = event.target.subject.value;
       const message = event.target.message.value;

       const boo = await fetchMessage(name, email, subject, message);
       if (boo) {
              const element = messageSuccess("Thank You!", "Message sent");
              ReactDOM.render(element, document.getElementById("idMessage"));
              await setTimeout(() => {
                     document.getElementById("contactForm").reset();
              }, 2000);
       } else {
              const element = messageDanger(
                     "Opp!",
                     "There was an error registering you  message"
              );
              ReactDOM.render(element, document.getElementById("idMessage"));
       }
}

async function fetchMessage(name, email, subject, message) {
       try {
              const data = {
                     name,
                     email,
                     subject,
                     message,
              };
              const request = await fetch(routersFectch.message, {
                     headers: {
                            "Content-Type": "application/json",
                     },
                     method: "POST",
                     body: JSON.stringify(data),
              });
              const response = JSON.parse(await request.text());
              console.log(response);
              if (response.insertId) {
                     return true;
              } else {
                     return false;
              }
       } catch (error) {
              const element = messageDanger("Eroor: ", error);
              return false;
       }
}

function messageSuccess(text1, text2) {
       return (
              <div
                     className="alert alert-success alert-dismissible fade show"
                     role="alert"
              >
                     <strong>{text1}</strong> {text2}
                     <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close"
                     >
                            <span aria-hidden="true">&times;</span>
                     </button>
              </div>
       );
}

function messageDanger(text1, text2) {
       return (
              <div
                     className="alert alert-danger alert-dismissible fade show"
                     role="alert"
              >
                     <strong>{text1}</strong> {text2}
                     <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close"
                     >
                            <span aria-hidden="true">&times;</span>
                     </button>
              </div>
       );
}

export default function Contact() {
       return (
              <div>
                     <section
                            className="paralax-mf footer-paralax bg-image sect-mt4 route"
                            style={{ background: "rgb(0, 0, 0)" }}
                     >
                            <div className="overlay-mf"></div>
                            <div className="container">
                                   <div className="row">
                                          <div className="col-sm-12">
                                                 <div className="contact-mf">
                                                        <div
                                                               id="contact"
                                                               className="box-shadow-full"
                                                        >
                                                               <div className="row">
                                                                      <div className="col-md-6">
                                                                             <div className="title-box-2">
                                                                                    <h5 className="title-left">
                                                                                           Send
                                                                                           Message
                                                                                           Us
                                                                                    </h5>
                                                                             </div>
                                                                             <div>
                                                                                    <form
                                                                                           onSubmit={
                                                                                                  sendmessage
                                                                                           }
                                                                                           id="contactForm"
                                                                                           className="contactForm"
                                                                                    >
                                                                                           <div id="sendmessage">
                                                                                                  Your
                                                                                                  message
                                                                                                  has
                                                                                                  been
                                                                                                  sent.
                                                                                                  Thank
                                                                                                  you!
                                                                                           </div>
                                                                                           <div id="errormessage"></div>
                                                                                           <div className="row">
                                                                                                  <div className="col-md-12 mb-3">
                                                                                                         <div className="form-group">
                                                                                                                <input
                                                                                                                       type="text"
                                                                                                                       required="text"
                                                                                                                       name="name"
                                                                                                                       className="form-control"
                                                                                                                       id="name"
                                                                                                                       placeholder="Your Name"
                                                                                                                       data-rule="minlen:4"
                                                                                                                       data-msg="Please enter at least 4 chars"
                                                                                                                />
                                                                                                                <div className="validation"></div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                                  <div className="col-md-12 mb-3">
                                                                                                         <div className="form-group">
                                                                                                                <input
                                                                                                                       type="email"
                                                                                                                       required="email"
                                                                                                                       className="form-control"
                                                                                                                       name="email"
                                                                                                                       id="email"
                                                                                                                       placeholder="Your Email"
                                                                                                                       data-rule="email"
                                                                                                                       data-msg="Please enter a valid email"
                                                                                                                />
                                                                                                                <div className="validation"></div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                                  <div className="col-md-12 mb-3">
                                                                                                         <div className="form-group">
                                                                                                                <input
                                                                                                                       type="text"
                                                                                                                       required="text"
                                                                                                                       className="form-control"
                                                                                                                       name="subject"
                                                                                                                       id="subject"
                                                                                                                       placeholder="Subject"
                                                                                                                       data-rule="minlen:4"
                                                                                                                       data-msg="Please enter at least 8 chars of subject"
                                                                                                                />
                                                                                                                <div className="validation"></div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                                  <div className="col-md-12 mb-3">
                                                                                                         <div className="form-group">
                                                                                                                <textarea
                                                                                                                       className="form-control"
                                                                                                                       required="text"
                                                                                                                       name="message"
                                                                                                                       id="message"
                                                                                                                       rows="5"
                                                                                                                       data-rule="required"
                                                                                                                       data-msg="Please write something for us"
                                                                                                                       placeholder="Message"
                                                                                                                ></textarea>
                                                                                                                <div className="validation"></div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                                  <div className="col-md-12">
                                                                                                         <button
                                                                                                                type="submit"
                                                                                                                className="btn btn-dark"
                                                                                                         >
                                                                                                                Send
                                                                                                                Message
                                                                                                         </button>
                                                                                                  </div>
                                                                                           </div>

                                                                                           <br />
                                                                                           <br />
                                                                                           <div id="idMessage"></div>
                                                                                           <br />
                                                                                           <br />
                                                                                    </form>
                                                                             </div>
                                                                      </div>
                                                                      <div className="col-md-6">
                                                                             <div className="title-box-2 pt-4 pt-md-0">
                                                                                    <h5 className="title-left">
                                                                                           Get
                                                                                           in
                                                                                           Touch
                                                                                    </h5>
                                                                             </div>
                                                                             <div className="more-info">
                                                                                    <p className="lead"></p>
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
                                                                      </div>
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
