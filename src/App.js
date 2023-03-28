import React, { createContext } from "react";
// import ComA from "./ComA";
// const Firstname = createContext("");
// const Lastname = createContext("");
//const lastname = Context("")
// import Sidebar from './sidebar/Sidebar'
import Login from "./Login";

function App() {
  return (
    <div>
      {/* <Firstname.Provider value="Saurabh">
        <Lastname.Provider value="Singh">
          <ComA />
        </Lastname.Provider>
      </Firstname.Provider> */}
      {/* <Sidebar/> */}
      <Login/>
    </div>
  );
}

export default App;
// export { Firstname,Lastname };
