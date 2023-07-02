import "./App.css";
import desktopimg from "./assets/images/illustration-sign-up-desktop.svg";
import mobileimg from "./assets/images/illustration-sign-up-mobile.svg";
import succesimg from "./assets/images/icon-success.svg";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsValid(validateEmail(email));
    setSubmitted(true);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <body>
      {isValid && submitted ? (
        <div className="succesbg">
          <div className="belsodiv">
            <img src={succesimg} />
            <h1>Thanks for subscribing!</h1>
            <div className="div">
              <p>
                A confirmation email has been sent to {email} Please open it and
                click the button inside to confirm your subscription.
              </p>
            </div>
            <button>Dismiss message</button>
          </div>
        </div>
      ) : (
        <form action="/succes" method="post" onSubmit={handleSubmit}>
          <div className="container">
            <div>
              <div className="ContLeftSite">
                <h1>Stay updated!</h1>
                <p>
                  Join 60,000+ product managers receiving monthly updates on:
                </p>
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
                <div id="emailfield">
                  <div id="valami">
                    <span>Email address</span>{" "}
                    {isValid ? "" : <a id="notValid">Valid email required</a>}
                  </div>
                  {isValid ? (
                    <input
                      type="email"
                      placeholder="email@company.com"
                      value={email}
                      onChange={handleChange}
                    />
                  ) : (
                    <input
                      style={{
                        backgroundColor: "#f8a3a379",
                        borderBlockColor: "#ff6257",
                        color: "#fa776e",
                      }}
                      type="email"
                      placeholder="email@company.com"
                      value={email}
                      onChange={handleChange}
                    />
                  )}
                </div>
                <button type="submit">Subscribe to monthly newsletter</button>
              </div>
            </div>
            <img src={desktopimg} />
          </div>
          <div className="mobilview">
            <img src={mobileimg} />
            <div className="mobileContainer">
              <h1>Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <li>
                Product discovery and building what{" "}
                <span id="space">matters</span>{" "}
              </li>
              <li>
                Measuring to ensure updates are a{" "}
                <span id="space">success</span>{" "}
              </li>
              <li>And much more!</li>
              <div id="emailfield">
                <div id="valami">
                  <span>Email address</span>{" "}
                  {isValid ? "" : <a id="notValid">Valid email required</a>}
                </div>
                {isValid ? (
                  <input
                    type="email"
                    placeholder="email@company.com"
                    value={email}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    style={{
                      backgroundColor: "#f8a3a379",
                      borderBlockColor: "#ff6257",
                      color: "#fa776e",
                    }}
                    type="email"
                    placeholder="email@company.com"
                    value={email}
                    onChange={handleChange}
                  />
                )}
              </div>
              <button type="submit">Subscribe to monthly newsletter</button>
            </div>
          </div>
        </form>
      )}
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </body>
  );
}

export default App;
/*

Thanks for subscribing!

A confirmation email has been sent to ash@loremcompany.com.
Please open it and click the button inside to confirm your subscription.

Dismiss message

*/
