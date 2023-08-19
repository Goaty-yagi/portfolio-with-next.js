import { optionTypes } from "../../hooks/use-animation";
import AbstractTab from "./abstractTab";

export default function AnimeTab({ set }) {
  const options = Object.keys(optionTypes);
  const animeStyle = {
    background: "none",
    borderBottom:'0.2rem solid #773c3c',
    borderRadius: "10px",
  };
  const tabStyle = {
    border: "none",
    borderTop:'0.2rem solid #00b5ff78',
    borderRadius: "10px",
    fontWeight: "bold",
    zIndex: 1,
    transition: "background .3s",
  };
  return (
    <>
      <AbstractTab tabs={options} set={set} animeStyle={animeStyle} tabStyle={tabStyle} hasKeyEffect={true}/>
    </>
  );
}
