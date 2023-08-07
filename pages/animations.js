import Easing from "../components/animations/easing"
import AnimeTab from "../components/customTabs/animeTab"
import { useState } from "react"
import { Box } from "@chakra-ui/react"
export default function Animatios() {
    const [currentTab, setCurrentTab] = useState('')
    return (
        <>
        <Box maxW={'800px'}>
        <AnimeTab set={setCurrentTab}/>
        <Easing/>
        </Box>
        </>
    )
}