import React, { useState } from 'react';
import { saveAs } from 'file-saver';

function Form() {
    const [input, setInput] = useState({});

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var blob = new Blob([JSON.stringify(input)], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'CallTaggerInformation.txt');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" onChange={handleChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
