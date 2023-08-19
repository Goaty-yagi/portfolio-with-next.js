import AbstractTab from "./abstractTab";

export default function AnimationApiTab({set}) {
    const tabs = ["effect-timing", "methods"];
    const animeStyle = {
        background: "none",
        borderBottom:'0.2rem solid #00edff',
        borderRadius: "0px",
      };
      const tabStyle = {
        border: "none",
        borderRadius: "0px",
        zIndex: 1,
        transition: "all .3s",
      };
    return (
        <AbstractTab tabs={tabs} set={set} animeStyle={animeStyle} tabStyle={tabStyle}/>
    )
}