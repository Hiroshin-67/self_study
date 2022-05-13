import React from "react";
import ReactDOM from "react-dom"
import {Clock, App, Toggle} from "./app.js"
import {LoginControl} from "./user.js"
import {NumberList, numbers, Blog, posts} from "./list.js"
import {NameForm, EssayForm, FlavorForm, Reservation} from "./form.js"
import {Calculater} from "./liftUp.js"
// import {WelcomeDialog} from "./compositon.js"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Clock />
    <Toggle />
    <LoginControl />
    <NumberList numbers={numbers} />
    <Blog posts={posts}/>
    <NameForm />
    <EssayForm />
    <FlavorForm />
    <Reservation />
    <Calculater />
  </React.StrictMode>,
  document.getElementById("root")
);
