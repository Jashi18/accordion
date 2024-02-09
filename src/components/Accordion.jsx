//Multiple Selection

import { useState } from "react";
import data from "./data";
import "./AccordionStyle.css";

function Accordion() {
  const [selected, setSelected] = useState(null);

  //Single Selection
  function handleClick(currentId) {
    console.log(currentId);
    setSelected(currentId === selected ? null : currentId);
  }

  return (
    <div className="wrapper">
      <div>
        {data.map((item) => (
          <div key={item.id} className="item">
            <div onClick={() => handleClick(item.id)} className="title">
              <h2>{item.question}</h2>
            </div>
            <div className="answer">
              {selected === item.id ? <div> {item.answer} </div> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
