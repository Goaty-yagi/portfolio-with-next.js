import AbstractSvg from "../abstractSvg";
import { useMethodsAnimation } from "../../../hooks/use-methods-animation";

export default function EachSvg() {
    const {refs, urrentMethod, setCurrentMethod} = useMethodsAnimation()
    return (
        <AbstractSvg
        refs={refs}/>
    )
}