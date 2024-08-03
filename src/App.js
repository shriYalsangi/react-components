import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
    const [selection, setSelection] = useState(null)

    const handleSelect = (option) => {
        setSelection(option)
    }

    const options = [
        {
            label: 'Action',
            value: 'action'
        },
        {
            label: 'Another action',
            value: 'another'
        },
        {
            label: 'Something else here',
            value: 'something'
        }
    ]

    return (
        <div className="flex">
            <Dropdown options={options} value={selection} onChange={handleSelect} />
            <Dropdown options={options} value={selection} onChange={handleSelect} />
        </div>
    )
}

export default App;
