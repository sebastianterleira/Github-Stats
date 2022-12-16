import React from "react";
import { ReactDOM } from "react";

function App() {
  return (
    <form>
      <div>
        <label htmlFor="email">email</label>
        <input id="email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input id="password" name="password" type="password"/>
      </div>
    </form>
  );
}

export default App;
