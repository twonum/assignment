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
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-400 via-teal-600 to-teal-800 p-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6">
                <div className="text-right mb-6">
                    <input
                        type="text"
                        className="w-full p-6 text-3xl font-semibold text-gray-800 border-2 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all"
                        value={input}
                        readOnly
                        aria-label="Calculator Input"
                    />
                </div>

                <div className="grid grid-cols-4 gap-6">
                    {["7", "8", "9", "/"].map((item) => (
                        <button
                            key={item}
                            className="p-6 bg-teal-500 text-white rounded-xl shadow-lg hover:bg-teal-600 transition-all transform hover:scale-105"
                            onClick={() => handleClick(item)}
                            aria-label={`Input ${item}`}
                        >
                            {item}
                        </button>
                    ))}
                    {["4", "5", "6", "*"].map((item) => (
                        <button
                            key={item}
                            className="p-6 bg-teal-500 text-white rounded-xl shadow-lg hover:bg-teal-600 transition-all transform hover:scale-105"
                            onClick={() => handleClick(item)}
                            aria-label={`Input ${item}`}
                        >
                            {item}
                        </button>
                    ))}
                    {["1", "2", "3", "-"].map((item) => (
                        <button
                            key={item}
                            className="p-6 bg-teal-500 text-white rounded-xl shadow-lg hover:bg-teal-600 transition-all transform hover:scale-105"
                            onClick={() => handleClick(item)}
                            aria-label={`Input ${item}`}
                        >
                            {item}
                        </button>
                    ))}
                    {["0", ".", "=", "+"].map((item) => (
                        <button
                            key={item}
                            className="p-6 bg-teal-500 text-white rounded-xl shadow-lg hover:bg-teal-600 transition-all transform hover:scale-105"
                            onClick={() => item === "=" ? handleCalculate() : handleClick(item)}
                            aria-label={item === "=" ? "Calculate" : `Input ${item}`}
                        >
                            {item}
                        </button>
                    ))}
                    <button
                        className="col-span-4 p-6 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition-all transform hover:scale-105"
                        onClick={handleReset}
                        aria-label="Clear Input"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
