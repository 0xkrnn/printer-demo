import React, { useState } from 'react';

function Dummy(props) {

    const fruits = [
        "Apple",
        "orange",
        "banana",
        "jack fruit",
        "jamun",

    ]
    const [input, setInput] = useState("")

    return (
        <div>
            <h1>Dummy</h1>

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <ul>
                {
                    fruits

                        .filter(fruit => {
                            return fruit.toLowerCase().includes(input.toLowerCase())
                        })

                        .map(item => {
                            return <li>{item}</li>
                        })

                }
            </ul>

        </div>
    );
}

export default Dummy;