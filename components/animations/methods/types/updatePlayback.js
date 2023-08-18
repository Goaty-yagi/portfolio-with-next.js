
import { UpdatePlaybackRateRadio } from "../../../customRadios";


export default function UpdatePlayback({option, set}) {
    return (
        <>
          <UpdatePlaybackRateRadio
            option={option}
            set={set}
          />
        </>
      );
}