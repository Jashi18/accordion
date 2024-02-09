//Single Selection
//Multiple Selection

import { useState } from "react";
import data from "./data";

function Accordion() {
  const [selected, setSelected] = useState(null);

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
              <h3>{item.question}</h3>
              <span> + </span>
            </div>
            {selected === item.id ? <div> {item.answer} </div> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
