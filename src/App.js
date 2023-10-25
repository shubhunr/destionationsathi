import React from 'react';
import "./App.css";
import SideBar from "./Components/sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Profile from "./Components/profile";
import AddPost from "./Components/addpost";
import Feed from "./Components/feed";
import Contactus from "./Components/contactus";
import Notifications from "./Components/notifications";
import SignIn from "./Components/signinup";
import Premium from "./Components/premium";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>

          <Route path="/profile" element={<Profile />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/signinup" element={<SignIn />} />
          <Route path="/premium" element={<Premium />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;