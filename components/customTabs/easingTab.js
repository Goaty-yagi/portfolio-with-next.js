import AbstractTab from "./abstractTab";

export default function EasingTab({set}) {
    const tabs = ["general", "linear", "cubic-bezier", "steps"];
    return (
        <AbstractTab tabs={tabs} set={set} color="#62a6ab"/>
    )
}