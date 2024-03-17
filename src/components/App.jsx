import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notifications from "./Notifications/Notifications";
import './App.css';
import { useEffect, useState } from "react";


const App = () => {
  const initFeedback = ({ good: 0, neutral: 0, bad: 0 });
 
  return (
    <div>
      <Options />
      <Feedback />
      
    </div>
  )
}


export default App
