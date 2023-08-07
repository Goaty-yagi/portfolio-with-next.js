import { useState, memo } from "react";

import DefaultLayout from "./commons/defaultLayout";

function Fill() {
  const configs = [
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

  const [currentTab, setCurrentTab] = useState("none");
  const clicks = [];
  const text = `Dictates whether the animation's effects should be reflected by the element(s) prior to playing ("backwards"), retained after the animation has completed playing ("forwards"), or both. Defaults to "none".`
  const additionalText = <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode">This example is easier to understand</a>
  function animationStart() {
    clicks.forEach((f) => {
      f();
    });
  }

  return (
    <>
      <DefaultLayout
        type="fill"
        text={text}
        additionalText={additionalText}
        configs={configs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        funArray={clicks}
        animationStart={animationStart}
      />
    </>
  );
}
export default memo(Fill);
