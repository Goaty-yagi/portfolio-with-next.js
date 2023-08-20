import { UpdatePlaybackRateRadio } from "../../../customRadios";
import { Text } from "@chakra-ui/react";

export default function UpdatePlayback({option, set}) {
    return (
        <>
        <Text fontWeight={'bold'}>UpdatePlaybackRate</Text>
          <UpdatePlaybackRateRadio
            option={option}
            set={set}
          />
        </>
      );
}