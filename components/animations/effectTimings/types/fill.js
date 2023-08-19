import { memo } from "react";

import DefaultLayout from "../commons/defaultLayout";

export const fillTypes = [
  {
    name: "none",
  },
  {
    name: "backwards",
  },
  {
    name: "forwards",
  },
  {
    name: "both",
  },
];

function Fill() {

  const clicks = [];
  const text = `Dictates whether the animation's effects should be reflected by the element(s) prior to playing ("backwards"), retained after the animation has completed playing ("forwards"), or both. Defaults to "none".`
  // const additionalText = <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode">This example is easier to understand</a>
  const additionalText = 'This example is set options iterationStart 0.5 and delay 500.'

  return (
    <>
      <DefaultLayout
        type="fill"
        text={text}
        additionalText={additionalText}
        configs={fillTypes}
        funArray={clicks}
      />
    </>
  );
}
export default memo(Fill);
