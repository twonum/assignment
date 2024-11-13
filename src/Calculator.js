import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleReset = () => {
        setInput("");
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput("Error");
        }
    };

    return (
        <div className="mb-6">
            <div className="text-right mb-4">
                <input
                    type="text"
                    className="w-full p-4 text-2xl border rounded-lg text-gray-700"
                    value={input}
                    readOnly
                />
            </div>
            <div className="grid grid-cols-4 gap-4">
                {["7", "8", "9", "/"].map((item) => (
                    <button
                        key={item}
                        className="p-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </button>
                ))}
                {["4", "5", "6", "*"].map((item) => (
                    <button
                        key={item}
                        className="p-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </button>
                ))}
                {["1", "2", "3", "-"].map((item) => (
                    <button
                        key={item}
                        className="p-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </button>
                ))}
                {["0", ".", "=", "+"].map((item) => (
                    <button
                        key={item}
                        className="p-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                        onClick={() => item === "=" ? handleCalculate() : handleClick(item)}
                    >
                        {item}
                    </button>
                ))}
                <button
                    className="col-span-4 p-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={handleReset}
                >
                    Clear
                </button>
            </div>
        </div>
    );
}

export default Calculator;
