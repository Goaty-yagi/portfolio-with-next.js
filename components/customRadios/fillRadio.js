import { fillTypes } from "../animations/effectTimings/fill";
import { useState } from "react";
import AbstractRadio from "./abstractRadio";

export default function FillRadio({option, set}) {
  const [currentVal, setCurrentVal] = useState(0);
  const name = "";
  const defaltValue = "";
//   const radioConfig = [
//     { text: "2X", value:2 },
//     {
//       text: "1/2",
//       value:1/2,
//     },
//     {
//         text: "toggle",
//         value:-1,
//       },
//   ];
const radioConfig = fillTypes.map((e) => {
    return {
        text:e.name,
        value:e.name
    }
})
//   function setter(o) {
//     console.log(o)
//     set({...option, 'playbackRate':o})
//   }
  return (
    <>
      <AbstractRadio
        config={radioConfig}
        name={option}

        setter={set}
      />
    </>
  )
}