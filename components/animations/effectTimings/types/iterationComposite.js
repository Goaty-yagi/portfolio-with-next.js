import { memo } from "react";

import DefaultLayout from "../commons/defaultLayout";

function IterationComposite() {
  const configs = [
    {
      name: 'replace',
    },
    {
      name: 'accumulate',
    },
  ];
  const clicks = [];
  const additionalText = <p>Currentry this works only on Firefox(9/8/2023)</p>
  const text = `Determines how values build from iteration to iteration in this animation. Can be set to accumulate or replace (see composite). Defaults to replace.`

  return (
    <>
      <DefaultLayout
        type="iterationComposite"
        text={text}
        additionalText={additionalText}
        configs={configs}
        funArray={clicks}
      />
    </>
  );
}
export default memo(IterationComposite);
