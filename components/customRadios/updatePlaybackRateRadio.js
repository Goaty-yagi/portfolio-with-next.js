import AbstractRadio from "./abstractRadio";

export default function UpdatePlaybackRateRadio({option, set}) {
  const name = "";
  const defaltValue = "";
  const radioConfig = [
    { text: "2X", value:2 },
    {
      text: "1/2",
      value:1/2,
    },
    {
        text: "toggle",
        value:-1,
      },
  ];
  return (
    <>
      <AbstractRadio
        config={radioConfig}
        name={option}
        setter={set}
      />
    </>
  );
}
