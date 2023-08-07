import { useState, memo } from "react";

import DefaultLayout from "./commons/defaultLayout";

function Direction() {
  const configs = [
    {
      name: "normal",
    },
    {
      name: "reverse",
    },
    {
      name: "alternate",
    },
    {
      name: "alternate-reverse",
    },
  ];
  const tabs = ["normal(default)", "reverse", "alternate", "alternate-reverse"];
  const [currentTab, setCurrentTab] = useState("General");
  const clicks = [];
  function animationStart() {
    console.log("clicked_DI", clicks)
    clicks.forEach((f) => {
      f();
    });
  }

  return (
    <>
      <DefaultLayout
        type="direction"
        configs={configs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        funArray={clicks}
        animationStart={animationStart}
      />
    </>
  );
}
export default memo(Direction);
