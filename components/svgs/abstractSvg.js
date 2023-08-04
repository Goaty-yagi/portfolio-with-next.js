// import React from "react";

// function element({
//     tag = "",
//     attributes = {},
//     eventListener = { event: "", callback: () => {} },
//   }) {
//     let element
//       if (tag) {
//          element = typeof tag === "string" ? document.createElement(tag) : tag;
//       }

//       if (eventListener.event) {
//         element.addEventListener(
//           eventListener.event,
//           eventListener.callback
//         );
//       }
//       if (Object.keys(attributes).length) {
//         try {
//           Object.entries(attributes).forEach((items) => {
//             element.setAttribute(items[0], items[1]);
//           });
//         } catch {
//           throw "You might not add tag.";
//         }
//       }
//       return element
//     }

import { useSvg } from "../../hooks/use-svg";
import { useEffect, useState } from "react";

export default function SvgObj({ d, viewBox, pathRefs, styles }) {
  const [totalLength, setTotalLength] = useState(0);
  useEffect(() => {
    if (pathRefs.current !== null) {
      setTotalLength(pathRefs.current.getTotalLength());
    }
  }, [d]);
  return (
    <>
      <svg viewBox={viewBox}>
        <path
        {...styles}
          strokeDashoffset={0}
          strokeDasharray={totalLength}
          ref={pathRefs}
          d={d}
        ></path>
      </svg>
    </>
  );
}

// export default {svgObj}
