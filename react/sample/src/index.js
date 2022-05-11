import React from "react";
import ReactDOM from "react-dom"
import {Clock, App, Toggle} from "./app.js"
import {LoginControl} from "./user.js"
import {NumberList, numbers, Blog, posts} from "./list.js"
import {NameForm, EssayForm, FlavorForm, Reservation} from "./form.js"
import {Calculater} from "./liftUp.js"
// import {WelcomeDialog} from "./compositon.js"

// サンプルプログラム
// import {PRODUCTS, FilterableProductTable2} from "./sample2.js"

import {products, FilterableProductTable} from "./sample.js"


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
    <FilterableProductTable products={products} />
  </React.StrictMode>,
  document.getElementById("root")
);
