import TotalTaskItem from "./items/TotalTaskItem";

const TotalTaskCard = () => {
    return (
        <div className="flex bg-white rounded-lg justify-around py-10">
            <TotalTaskItem
                color="emerald"
                icon="done"
                text="Done"
                count={12}
            />
            <TotalTaskItem
                color="blue"
                icon="history"
                text="In progress"
                count={4}
            />
            <TotalTaskItem
                color="orange"
                icon="stack"
                text="In Queue"
                count={2}
            />
        </div>
    )
}

export default TotalTaskCard;