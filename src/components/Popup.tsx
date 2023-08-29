import {ReactNode, useState} from "react";
import "./Popup.css"

type PopupProps = {
    children: ReactNode;
    trigger: boolean
}

export function Popup(props: PopupProps) {
   const [newTrigger, setNewTrigger] = useState(props.trigger);

   function handleSubmit(e: React.FormEvent) {
     e.preventDefault();
     setNewTrigger(false);
   } 
   
    return props.trigger ? (
      <div className="popup">
        <div className="popup-inner">
          <img src="/images/hearts.jpg" className="popup-image" />
          <h1 className="popup-header"> Thank You For Your Feedback! </h1>
          <p className="popup-body"> Your Response was successfully recorded. </p>
          <button className="close-btn"
            onClick={e => {handleSubmit(e)}}
          >Close</button>
          {props.children}
        </div>
      </div>
    ) : (
      " "
    );
}