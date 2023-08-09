import { useState, memo } from "react";

import DefaultLayout from "./commons/defaultLayout";

function IterationComposite() {
  const configs = [
    {
      name: 'replace',
    },
    {
      name: 'accumulate',
    },
  ];
  const [currentTab, setCurrentTab] = useState("");
  const clicks = [];
  const additionalText = <p>Currentry this works only on Forefox(9/8/2023)</p>
  const text = `Determines how values build from iteration to iteration in this animation. Can be set to accumulate or replace (see composite). Defaults to replace.`
  async function animationStart() {
    console.log(clicks)
    clicks.forEach((f) => {
        f.fun();
    });
  }

  return (
    <>
      <DefaultLayout
        type="iterationComposite"
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
export default memo(IterationComposite);
