import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState("");

    // Handle numeric and operator button clicks
    const handleClick = (value) => {
        setInput((prevInput) => {
            // Prevent multiple operators or invalid characters
            if (value === '.' && prevInput.includes('.')) return prevInput;
            if (['+', '-', '*', '/'].includes(value) && /[+\-*/]$/.test(prevInput)) return prevInput;
            return prevInput + value;
        });
    };

    // Reset input
    const handleReset = () => {
        setInput("");
    };

    // Perform calculation
    const handleCalculate = () => {
        try {
            // Validate and prevent empty input or invalid expressions
            if (input === "" || /[+\-*/]$/.test(input)) {
                setInput("Error");
                return;
            }

            // Evaluate the expression safely
            const result = Function('return ' + input)(); // Safer than eval()
            setInput(result.toString());
        } catch (error) {
            setInput("Error");
        }
    };

    return (
        <div className="mb-6 max-w-xs mx-auto p-4">
            <div className="text-right mb-4">
                <input
                    type="text"
                    className="w-full p-4 text-2xl border rounded-lg text-gray-700"
                    value={input}
                    readOnly
                    aria-label="Calculator Input"
                />
            </div>
            <div className="grid grid-cols-4 gap-4">
                {["7", "8", "9", "/"].map((item) => (
                    <button
                        key={item}
                        className="p-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                        onClick={() => handleClick(item)}
                        aria-label={`Input ${item}`}
                    >
                        {item}
                    </button>
                ))}
                {["4", "5", "6", "*"].map((item) => (
                    <button
                        key={item}
                        className="p-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                        onClick={() => handleClick(item)}
                        aria-label={`Input ${item}`}
                    >
                        {item}
                    </button>
                ))}
                {["1", "2", "3", "-"].map((item) => (
                    <button
                        key={item}
                        className="p-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                        onClick={() => handleClick(item)}
                        aria-label={`Input ${item}`}
                    >
                        {item}
                    </button>
                ))}
                {["0", ".", "=", "+"].map((item) => (
                    <button
                        key={item}
                        className="p-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                        onClick={() => item === "=" ? handleCalculate() : handleClick(item)}
                        aria-label={item === "=" ? "Calculate" : `Input ${item}`}
                    >
                        {item}
                    </button>
                ))}
                <button
                    className="col-span-4 p-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={handleReset}
                    aria-label="Clear Input"
                >
                    Clear
                </button>
            </div>
        </div>
    );
}

export default Calculator;
