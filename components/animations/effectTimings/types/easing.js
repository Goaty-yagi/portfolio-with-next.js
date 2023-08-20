import { useState ,memo } from "react";
import { EasingTab } from "../../../customTabs";
import DefaultLayout from "../commons/defaultLayout";

function Easing() {
  const optionType= "easing"
  const configs = [
    {
      name: "linear",
      types: ["General", "Linear"],
    },
    {
      name: "ease",
      types: ["General", "Cubic-bezier"],
    },
    {
      name: "ease-in",
      types: ["General", "Cubic-bezier"],
    },
    {
      name: "ease-out",
      types: ["General", "Cubic-bezier"],
    },
    {
      name: "ease-in-out",
      types: ["General", "Cubic-bezier"],
    },
    {
      name: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
      types: ["Cubic-bezier"],
    },
    {
      name: "linear(0,0.9,0.95,1)",
      types: ["Linear"],
    },
    {
      name: "linear(0,0.9,1)",
      types: ["Linear"],
    },
    {
      name: "steps(5, jump-none)",
      types: ["Steps"],
    },
    {
      name: "steps(5, start)",
      types: ["Steps"],
    },
    {
      name: "steps(5, end)",
      types: ["Steps"],
    },
    {
      name: "steps(6, jump-none)",
      types: ["Steps"],
    },
  ];
  const [currentTab, setCurrentTab] = useState("General");
  const clicks = [];
  const text = `The rate of the animation's change over time. Accepts the pre-defined values "linear", "ease", "ease-in", "ease-out", and "ease-in-out", or a custom "cubic-bezier" value like "cubic-bezier(0.42, 0, 0.58, 1)". Defaults to "linear".`
  return (
    <>
      <DefaultLayout
        type={optionType}
        text={text}
        configs={configs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        funArray={clicks}
        CustomTab={EasingTab}
      />
    </>
  );
}
export default memo(Easing);