import { Box } from "@chakra-ui/react";
import { CustomImage } from "../commons";
import { useContext } from "react";
import { GlobalContext } from "../commons/provider";

export default function Thumbnail({ cover_image, alt }) {
  const context = useContext(GlobalContext);
  const imageProps = {
    src: cover_image,
    alt: alt,
    layout: "fill",
    objectFit: "cover",
  };

  return (
    <Box
      position={"relative"}
      m="1.5rem 0"
      w={{ base: context.currentW - 16, md: "600px" }}
      h={{ base: context.currentW * 0.6, md: "360px" }}
    >
      <CustomImage props={imageProps} />
    </Box>
  );
}
