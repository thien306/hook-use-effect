import {useState, useEffect } from 'react';

function Selector() {

    let [selected, setSelected ] = useState("0");
    let [valueSelected, setValueSelected] = useState("");

    const choice = e => {
        setSelected (e.target.value);
    };

    useEffect(() => {
        switch(selected) {
            case "0":
        setValueSelected("Java");
        break;
      case "1":
        setValueSelected("ReactJs");
        break;
      case "2":
        setValueSelected("Javascript");
        break;
      case "3":
        setValueSelected("Php");
        break;
      default:
        setValueSelected("Unknown");
        }
    }, [selected])

    return (
        <div>
          Khoá học :
          <select
            onChange={e => {
              choice(e);
            }}
          >
            <option value="0">Java</option>
            <option value="1">ReactJs</option>
            <option value="2">Javascript</option>
            <option value="3">Php</option>
          </select>
          <h2>Your selected: {valueSelected}</h2>
        </div>
    );
}

export default Selector;