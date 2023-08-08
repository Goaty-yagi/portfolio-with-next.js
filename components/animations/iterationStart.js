import { useState, memo } from "react";

import DefaultLayout from "./commons/defaultLayout";

function IterationStart() {
  const configs = [
    {
      name: 0.0,
    },
    {
      name: 0.5,
    },
    {
      name: 0.7,
    },
    {
      name: 0.9,
    },
  ];

  const [currentTab, setCurrentTab] = useState("");
  const clicks = [];
  const text = `Describes at what point in the iteration the animation should start. 0.5 would indicate starting halfway through the first iteration for example, and with this value set, an animation with 2 iterations would end halfway through a third iteration. Defaults to 0.0.`
  function animationStart() {
    clicks.forEach((f) => {
        f.fun();
    });
  }

  return (
    <>
      <DefaultLayout
        type="iterationStart"
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
export default memo(IterationStart);
