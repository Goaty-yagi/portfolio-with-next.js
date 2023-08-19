import { memo } from "react";

import DefaultLayout from "../commons/defaultLayout";

function PseudoElement() {
  const configs = [
    {
      name: "::before",
    },
    {
      name: "::after",
    },
  ];
  const clicks = [];
  const text = `A string containing a pseudo-element selector, such as "::before". If present, the effect is applied to the selected pseudo-element of target, rather than to target itself.`;

  return (
    <>
      <DefaultLayout
        type="pseudoElement"
        text={text}
        configs={configs}
        funArray={clicks}
      />
    </>
  );
}
export default memo(PseudoElement);
