import Image from "next/image";
import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { createContext } from "react";
import SvgObj from "../components/svgs/abstractSvg";
import SvgMenu from "../components/svgs/svgMenu";
import { useSvg } from "../hooks/use-svg";

export default function Svg() {
  const refs = useRef(null);
  const circleRef = useRef(null);
  const {
    viewBox,
    setSvgs,
    svgs,
    paths,
    d,
    styles,
    setPaths,
    pathRefs,
    animationHandler,
  } = useSvg();
  const [isCustom, setIsCustom] = useState(false);
  // useEffect(() => {
  //   if (refs !== null) {
  //     console.log(refs.current.getTotalLength(), refs.current);
  //     refs.current.animate([
  //       // key frames
  //       {  strokeDashoffset:56  },
  //       { strokeDashoffset:0 },
  //       // { transform: 'translateY(0px)' },
  //       // { transform: 'translateY(-300px)' }
  //     ], {
  //       // sync options
  //       duration: 1000,
  //       iterations: Infinity
  //     })
  //     circleRef.current.animate([
  //       {
  //         offsetDistance: '0%'
  //       },
  //       {
  //         offsetDistance: '100%'
  //       }
  //     ], {
  //       // sync options
  //       duration: 1000,
  //       iterations: Infinity
  //     })
  //     // console.log(refs.getTotalLength())
  //   }
  // }, []);
  // function styles() {
  //   return {
  //     // fill:'red',
  //     // strokeWidth: 0.5,
  //     stroke: "url(#Gradient2)",
  //     // animation: `path 1s`,
  //     strokeDashoffset: 0,
  //     strokeDasharray: 56,
  //     "--angle": "60deg",
  //   };
  // }
  async function setAttributes(viewBox, path, styles, isCustom) {
    if (isCustom) {
      setIsCustom(true);
      setSvgs({ ...svgs, viewBox: viewBox });
      setPaths({ ...paths, d: "", totalLength: 0 });
    } else {
      setIsCustom(false);
      setSvgs({ ...svgs, viewBox: viewBox });
      setPaths({
        ...paths,
        d: path,
        totalLength: pathRefs.current ? pathRefs.current.getTotalLength() : 0,
        styles:{... styles}
      });
    }
  }
  return (
    <>
      <Box w={"400px"}>
        <SvgMenu setAttributes={setAttributes} />
        {!isCustom ? (
          <>
            <SvgObj
              d={d ? d : ""}
              viewBox={viewBox ? viewBox : "0 0 24 24"}
              pathRefs={pathRefs}
              styles={styles}
            />
          </>
        ) : (
          <></>
        )}
        {/* <SvgMenu context={Context}/> */}
        {/* <svg  style={{display:'absolute',layout:'fill', objectFit:'cover'}}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="red" />
              <stop offset="50%" stopColor="black" stopOpacity="0" />
              <stop offset="100%" stopColor="blue" />
            </linearGradient>
          </defs>
          <path
          // className='path'
              ref={refs}

              style={styles()}
            //   fill="url(#Gradient2)" 
            // d="M16 2.421l4.296 8.909 9.769 1.452-7.075 7.057 0.238 1.416 1.415 8.443-8.644-4.649-8.643 4.652 1.415-8.444 0.237-1.416-7.073-7.059 9.768-1.452 0.642-1.329zM15.999 0.486c-0.896 0-1.712 0.505-2.093 1.296l-3.622 7.52-8.335 1.239c-0.856 0.128-1.567 0.713-1.843 1.512-0.276 0.802-0.067 1.684 0.537 2.286l6.106 6.1-1.417 8.458c-0.143 0.852 0.226 1.707 0.949 2.206 0.397 0.273 0.864 0.411 1.332 0.411 0.385 0 0.77-0.093 1.119-0.281l7.266-3.912 7.266 3.912c0.349 0.187 0.735 0.281 1.118 0.281 0.468 0 0.934-0.138 1.333-0.411 0.722-0.498 1.091-1.353 0.947-2.206l-1.417-8.458 6.11-6.1c0.605-0.601 0.812-1.485 0.536-2.286s-0.988-1.385-1.843-1.512l-8.333-1.239-3.624-7.52c-0.378-0.791-1.195-1.295-2.093-1.295z"
              d="M12.7692 6.70483C9.53846 2.01902 4 3.90245 4 8.68256C4 13.4627 13.2308 20 13.2308 20C13.2308 20 22 13.2003 22 8.68256C22 4.16479 16.9231 2.01903 13.6923 6.70483L13.2308 7.0791L12.7692 6.70483Z"
              // stroke="#000000"
              // strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle ref={circleRef} className="ball"  r="1" fill="white"/>
        </svg> */}
        <Button onClick={() => animationHandler()}></Button>
      </Box>
    </>
  );
}
