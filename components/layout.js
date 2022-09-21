import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import Fish from "./fish";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children, router }) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  };
  return (
    <>
      <Header />
      <Suspense>
        <Fish />
      </Suspense>
      <AnimatePresence
        exitBeforeEnter
        mode='wait'
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
          <Box maxW="600px">
            {children}
          </Box>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}
