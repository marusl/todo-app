interface Props {
    color: string,
    icon: string,
    text: string,
    count: number
}

const TotalTaskItem = ({ color, icon, text, count }: Props) => {
    return (
        <div className="text-center">
            <div className={`bg-${color}-100 rounded-full w-20 h-20 flex items-center justify-center`}>
                <span className={`text-${color}-400 material-symbols-outlined text-3xl`}>
                    {icon}
                </span>
            </div>
            <p className="text-gray-500">{ text }</p>
            <p className="text-4xl">{ count }</p>
        </div>
    )
}

export default TotalTaskItem;