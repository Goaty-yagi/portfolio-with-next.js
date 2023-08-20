import { memo } from "react";

import DefaultLayout from "../commons/defaultLayout";

function Composite() {
  const configs = [
    {
      name: 'replace',
    },
    {
      name: 'add',
    },
    {
      name: 'accumulate',
    },
  ];
  const clicks = [];
  const text = `Determines how values are combined between this animation and other, separate animations that do not specify their own specific composite operation. Defaults to replace.

  add dictates an additive effect, where each successive iteration builds on the last. For instance with transform, a translateX(-200px) would not override an earlier rotate(20deg) value but result in translateX(-200px) rotate(20deg).
  accumulate is similar but a little smarter: blur(2) and blur(5) become blur(7), not blur(2) blur(5).
  replace overwrites the previous value with the new one.`

  return (
    <>
      <DefaultLayout
        type="composite"
        text={text}
        configs={configs}
        funArray={clicks}
      />
    </>
  );
}
export default memo(Composite);
