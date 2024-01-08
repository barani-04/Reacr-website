import React from "react";
import "./App.css";
 
function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
                        />
                    </div>
                    <li>
                        <a href="#courses">Courses</a>
                    </li>
                    <li>
                        <a href="#tutorials">Tutorials</a>
                    </li>
                    <li>
                        <a href="#jobs">Jobs</a>
                    </li>
                    <li>
                        <a href="#student">Student</a>
                    </li>
                </ul>
 
                <div class="rightNav">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="btn btn-sm">
                        Search
                    </button>
                </div>
            </nav>
 
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                        10 React JS  Topics 
                        </h1>
                        <p class="text-small">
                           <ul>
                            <li>React Component</li>
                            <li>JSX</li>
                            <li>Redux</li>
                            <li>React Routers</li>
                            <li>React Hooks</li>
                            <li>Props</li>
                            <li>States</li>
                  
                           </ul>
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                           What is React?
                        </h1>
                        <p class="text-small">
                        React can be used to develop single-page, mobile, or server-rendered 
                        applications with frameworks like Next.js. Because React is only concerned 
                        with the user interface and rendering components to the DOM, React applications
                         often rely on libraries for routing and other client-side functionality.[8][9] 
                         A key advantage of React is that it only rerenders those parts of the page that have changed,
                         avoiding unnecessary rerendering of unchanged DOM elements.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Important of React 
                        </h1>
                        <p class="text-small">
                        React provides state-of-the-art functionality and is an excellent choice for developers
                        looking for an easy-to-use and highly productive JavaScript framework.
                        Using React, you can build complex UI interactions that
                        communicate with the server in record time with JavaScript-driven pages
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            What is JSX 
                        </h1>
                        <p class="text-small">
                        React embraces the fact that rendering logic is inherently coupled with other UI logic:
                         how events are handled, how the state changes over time, 
                         and how the data is prepared for display.

Instead of artificially separating technologies by putting markup and logic in separate files,
 React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section,
  but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.

React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    );
}
 
export default App;