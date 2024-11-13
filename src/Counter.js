import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="text-center">
            <div className="text-3xl font-semibold mb-4">
                Counter: <span className="text-teal-500">{count}</span>
            </div>
            <div className="flex justify-center space-x-4">
                <button
                    className="p-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                    onClick={() => setCount(count + 1)}
                >
                    Increment
                </button>
                <button
                    className="p-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={() => setCount(count - 1)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default Counter;
