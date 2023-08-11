import { memo } from "react";

import DefaultLayout from "../commons/defaultLayout";

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
  const clicks = [];
  const text = `Whether the animation runs forwards (normal), backwards (reverse), switches direction after each iteration (alternate), or runs backwards and switches direction after each iteration (alternate-reverse). Defaults to "normal".\n This animations iterate 3 times.`

  return (
    <>
      <DefaultLayout
        type="direction"
        text={text}
        configs={configs}
        funArray={clicks}
      />
    </>
  );
}
export default memo(Direction);
