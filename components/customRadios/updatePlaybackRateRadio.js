import AbstractRadio from "./abstractRadio";
import { useState } from "react";

export default function UpdatePlaybackRate({option, set}) {
  const [currentVal, setCurrentVal] = useState(0);
  const name = "";
  const defaltValue = "";
  const radioConfig = [
    { text: "2X", value:2 },
    {
      text: "1/2",
      value:1/2,
    },
    {
        text: "toggle",
        value:-1,
      },
  ];
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
  );
}
