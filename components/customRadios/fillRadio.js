import { fillTypes } from "../animations/effectTimings/types/fill";
import AbstractRadio from "./abstractRadio";

export default function FillRadio({option, set}) {

const radioConfig = fillTypes.map((e) => {
    return {
        text:e.name,
        value:e.name
    }
})
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