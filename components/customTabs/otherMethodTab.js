import AbstractTab from "./abstractTab";
import { methodTypes } from "../animations/methods/method";

export default function OtherMethodTab({set}) {
    const tabs = Object.values(methodTypes).map((e) => {
        return e.name
    })
    const animeStyle = {
        background: "#940909",
        boxShadow: 'inset 0 0 1px 3px #FFF',
        borderRadius: "10px",
      };
      const tabStyle = {
        border: "none",
        borderRadius: "0px",
        zIndex: 1,
        transition: "all .1s",
        borderRadius: "10px",
      };
    return (
        <AbstractTab tabs={tabs.slice(5,tabs.length)} set={set} animeStyle={animeStyle} tabStyle={tabStyle} doubleClickable={true}/>
    )
}