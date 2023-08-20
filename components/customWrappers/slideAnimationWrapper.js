import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";

export default function SlideAnimatioWrapper({ children, id }) {
  const variants = {
    hidden: { opacity: 0, x: -20, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -20, y: 0 },
  };
  return (
    <Box w={'100%'}>
      <AnimatePresence
        exitBeforeEnter
        mode="wait"
        initial={true}
        // onExitComplete={() => {
        //   if (typeof window !== "undefined") {
        //     window.scrollTo({ top: 0 });
        //   }
        // }}
      >
        <motion.div
          key={id}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: "easeInOut" }}
          style={{ position: "relative" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
