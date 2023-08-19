import { memo } from "react";

import DefaultLayout from "../commons/defaultLayout";

function EndDelay() {
  const configs = [
    {
      name: 0,
    },
    {
      name: 750,
    },
    {
      name: 1000,
    },
    {
      name: 2000,
    },
  ];
  const clicks = [];
  const text = `The number of milliseconds to delay after the end of an animation. This is primarily of use when sequencing animations based on the end time of another animation. Defaults to 0.`

  return (
    <>
      <DefaultLayout
        type="endDelay"
        text={text}
        configs={configs}
        funArray={clicks}
      />
    </>
  );
}
export default memo(EndDelay);
