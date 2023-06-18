import { Box, Flex, Spinner, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { Suspense, useEffect, useState } from "react";
// import Goaty from "./threeObj";
import Footer from "./footer";
import Header from "./header";
import Loader from "./threeDComponents/loader";
import Goaty from "./threeDComponents/threeObj";

export default function Layout({ children, router, pageProps }) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  };
  const headInfo = {
    author: "Nobuhiro Funahashi",
    baseTitle:"Bing-Portfolio"
  }
  const pageList = ["work", "frontmatter"]
  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    if (window !== "undefined") {
      setUrl(document.URL);
      setPath(router.state.asPath==="/" ? "" : splitPath(router.state.asPath))
      setDescription(filterDescription())
    }
  }, [router.state]);

  const filterDescription = () => {
    // filter pageProps to get data for description for Head
    const filteredItem = pageList.find(p =>
      p in pageProps === true
    )
    switch(filteredItem) {
      case "work":
        return pageProps.work.productDescription;
      case "frontmatter":
        console.log(pageProps)
        return pageProps.frontmatter.title;
      default:
        return "unko";
    }
  }

  const initialLetterToApperCase = (string) => {
    return string.replace(/\b[a-z]/g, char => char.toUpperCase());
  }

  const splitPath = (path) => {
    const separator = "-"
    return  path.split("/").map((p, index , array) => {
      if(index!==0) {
        return initialLetterToApperCase(p)
      }
    }).join(separator)
  }

  // const ThreeDObj = dynamic(() => import("./threeObj"), {
  //   // ssr: false,
  //   // suspense:true,
  //   loading: () => <Loader />
  // })
  const bg = useColorModeValue(
    "linear-gradient(to bottom, #6cd8e8, #001517)",
    "linear-gradient(to bottom, #232323 80%, #6cd8e8)"
  );
  return (
    <Flex
      bg={bg}
      minW="100vw"
      minH="100vh"
      flexDirection={"column"}
      alignItems="center"
    >
      <Head>
        <title>{`Bing-Portfolio${path}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta property="og:site_name" content={headInfo.baseTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="/map.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={headInfo.baseTitle} />
        <meta name="author" content={headInfo.auther} />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <meta property="og:site_name" content={headInfo.baseTitle}/>
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="180x180"/>
      </Head>
      <Header />
      <Box
          w={{ base: "100%", md: "600px" }}
          h={{ base: "200px", md: "300px" }}
        >
      <Suspense fallback={<Loader/>}>
        <Goaty />
      </Suspense>
      </Box>
      <AnimatePresence
        exitBeforeEnter
        mode="wait"
        initial={true}
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <motion.div
          key={router.route}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: "easeInOut" }}
          style={{ position: "relative" }}
        >
          <Box maxW="600px" minH="50vh">
            {children}
          </Box>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </Flex>
  );
}
