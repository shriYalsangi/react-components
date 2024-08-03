import { GoTriangleDown , GoTriangleUp } from "react-icons/go";
import { useState } from "react";


function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleClick = (nextIndex) => {
        setExpandedIndex((currentExpandedIndex) => {
            return currentExpandedIndex === nextIndex ? -1 : nextIndex
        })
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex

        const icon = (
            <span className="text-2xl">
                {isExpanded ? <GoTriangleUp  /> : <GoTriangleDown />}
            </span>
        )

        return (
            <div key={item.id} >
                <div 
                    onClick={() => handleClick(index)}
                    className="flex items-center justify-between p-3 bg-blue-50 border-b cursor-pointer"
                >
                    {item.label}
                    { icon }
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })
    return (
        <div className="border-x border-t rounded">
            {renderedItems}
        </div>
    )
}

export default Accordion;