import { memo } from "react";

import DefaultLayout from "../commons/defaultLayout";

function Duration() {
  const configs = [
    {
      name: 0,
    },
    {
      name: 1000,
    },
    {
      name: 1500,
    },
    {
      name: 2000,
    },
  ];
  const clicks = [];
  const text = `The number of milliseconds each iteration of the animation takes to complete. Defaults to 0. Although this is technically optional, keep in mind that your animation will not run if this value is 0.  `

  return (
    <>
      <DefaultLayout
        type="duration"
        text={text}
        configs={configs}
        funArray={clicks}
      />
    </>
  );
}
export default memo(Duration);
