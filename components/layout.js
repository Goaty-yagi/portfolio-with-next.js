import { Box, Flex, Spinner, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import Goaty from "./threeObj";
import Footer from "./footer";
import Header from "./header";
export default function Layout({ children, router }) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  };

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
      <Header />
      <Box
          w={{ base: "100%", md: "600px" }}
          h={{ base: "200px", md: "300px" }}
        >
      <Suspense>
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
