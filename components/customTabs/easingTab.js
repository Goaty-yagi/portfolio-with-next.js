import AbstractTab from "./abstractTab";

export default function EasingTab({set}) {
    const tabs = ["General", "Linear", "Cubic-bezier", "Steps"];
    return (
        <AbstractTab tabs={tabs} set={set} color="#62a6ab"/>
    )
}