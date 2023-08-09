import { useState, memo } from "react";

import DefaultLayout from "./commons/defaultLayout";

function PseudoElement() {
  const configs = [
    {
      name: '::before',
    },
  ];
  const [currentTab, setCurrentTab] = useState("");
  const clicks = [];
  const text = `A string containing a pseudo-element selector, such as "::before". If present, the effect is applied to the selected pseudo-element of target, rather than to target itself.`
  function animationStart() {
    clicks.forEach((f) => {
        f.fun();
    });
  }

  return (
    <>
      <DefaultLayout
        type="pseudoElement"
        text={text}
        configs={configs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        funArray={clicks}
        animationStart={animationStart}
      />
    </>
  );
}
export default memo(PseudoElement);
