import React, { Component } from "react";
import ReactDOM from "react-dom";
import routersFectch from "../Tools/routersFectch";
import publicIp from "public-ip";

export default class Feedback extends Component {
       constructor(props) {
              super(props);

              this.like = this.like.bind(this);
              this.disLike = this.disLike.bind(this);
              this.messageSuccess = this.messageSuccess.bind(this);

              this.state = {
                     btnLike: parseInt(localStorage.getItem("like")) || 0,
                     btnDisLike: parseInt(localStorage.getItem("disLike")) || 0,
              };
       }

       async getClientIp() {
              const ip = await publicIp.v4({
                     fallbackUrls: ["https://ifconfig.co/ip"],
              });
              return ip;
       }

       async like() {
              const boo = await this.likeFect();
              console.log(boo);
              if (boo) {
                     const Element = this.messageSuccess(
                            "Thank You!",
                            "Feedback sent"
                     );
                     ReactDOM.render(
                            Element,
                            document.getElementById("idMessageFeedback")
                     );
                     this.setState({ btnLike: 1 });
                     this.setState({ btnDisLike: 0 });
                     localStorage.setItem("like", 1);
                     localStorage.setItem("disLike", 0);
              } else {
                     const element = this.messageDanger(
                            "Opp!",
                            "There was an error registering your feedback"
                     );
                     ReactDOM.render(
                            element,
                            document.getElementById("idMessageFeedback")
                     );
              }
       }
       async disLike() {
              const boo = await this.disLikeFect();
              console.log(boo);
              if (boo) {
                     const element = this.messageSuccess(
                            "Thank You!",
                            "Feedback sent"
                     );
                     ReactDOM.render(
                            element,
                            document.getElementById("idMessageFeedback")
                     );
                     this.setState({ btnDisLike: 1 });
                     this.setState({ btnLike: 0 });
                     localStorage.setItem("disLike", 1);
                     localStorage.setItem("like", 0);
              } else {
                     const element = this.messageDanger(
                            "Opp!",
                            "There was an error registering your feedback"
                     );
                     ReactDOM.render(
                            element,
                            document.getElementById("idMessageFeedback")
                     );
              }
       }

       /* Fects */
       async likeFect() {
              try {
                     const data = {
                            client: await this.getClientIp(),
                            feeback: 1,
                     };
                     const request = await fetch(routersFectch.feeback, {
                            headers: {
                                   "Content-Type": "application/json",
                            },
                            method: "POST",
                            body: JSON.stringify(data),
                     });
                     const response = JSON.parse(await request.text());
                     console.log(response);
                     if (response.insertId || response.affectedRows) {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     const element = this.messageDanger("Eroor: ", error);
                     return false;
              }
       }
       async disLikeFect() {
              try {
                     const data = {
                            client: await this.getClientIp(),
                            feeback: 0,
                     };
                     const request = await fetch(routersFectch.feeback, {
                            headers: {
                                   "Content-Type": "application/json",
                            },
                            method: "POST",
                            body: JSON.stringify(data),
                     });
                     const response = JSON.parse(await request.text());
                     console.log(response);
                     if (response.insertId || response.affectedRows) {
                            return true;
                     } else {
                            return false;
                     }
              } catch (error) {
                     const element = this.messageDanger("Eroor: ", error);
                     return false;
              }
       }

       messageSuccess(text1, text2) {
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

       messageDanger(text1, text2) {
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

       render() {
              return (
                     <div>
                            <section id="feedback" className="">
                                   <div className="container">
                                          <div className="row">
                                                 <div className="col-sm-12">
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <div className="title-box text-center">
                                                               <div className="box-shadow-full">
                                                                      <div className="title-box-2 pt-4 pt-md-0">
                                                                             <h5 className="title-left">
                                                                                    Feedback
                                                                             </h5>
                                                                      </div>
                                                                      <p>
                                                                             What
                                                                             is
                                                                             your
                                                                             feedback?
                                                                      </p>
                                                                      <hr />
                                                                      <br />
                                                                      <br />
                                                                      <button
                                                                             id="like"
                                                                             onClick={
                                                                                    this
                                                                                           .like
                                                                             }
                                                                             className={
                                                                                    this
                                                                                           .state
                                                                                           .btnLike ===
                                                                                    0
                                                                                           ? "btn ml-5"
                                                                                           : "btn ml-5 btn-dark"
                                                                             }
                                                                      >
                                                                             <span
                                                                                    style={{
                                                                                           fontSize:
                                                                                                  "50px",
                                                                                    }}
                                                                             >
                                                                                    &#128077;
                                                                             </span>
                                                                      </button>
                                                                      <button
                                                                             id="disLike"
                                                                             onClick={
                                                                                    this
                                                                                           .disLike
                                                                             }
                                                                             className={
                                                                                    this
                                                                                           .state
                                                                                           .btnDisLike ===
                                                                                    0
                                                                                           ? "btn ml-5"
                                                                                           : "btn ml-5 btn-dark"
                                                                             }
                                                                      >
                                                                             <span
                                                                                    style={{
                                                                                           fontSize:
                                                                                                  "50px",
                                                                                    }}
                                                                             >
                                                                                    &#128078;
                                                                             </span>
                                                                      </button>
                                                                      <br />
                                                                      <br />
                                                                      <div id="idMessageFeedback"></div>
                                                                      <br />
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </section>
                     </div>
              );
       }
}
