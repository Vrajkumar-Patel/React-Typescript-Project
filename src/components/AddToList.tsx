import React, { useState } from 'react';
import { Istate as Props } from "../App";

interface Iprops{
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<Iprops> = ({people, setPeople}) => {
    const [input, setInput] = useState({
        name: '',
        age: '',
        note: '',
        img: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (
            !input.name ||
            !input.age ||
            !input.img
        ) {
            return
        }
        if (people !== undefined) {
            setPeople([...people, 
                {
                    name: input.name,
                    age: parseInt(input.age),
                    url: input.img,
                    note: input.note
                }
            ])
            
        }
    }

    return (
        <div className='AddToList'>
            <input
                type='text'
                placeholder='Name'
                className='AddToList-input'
                value={input.name}
                name='name'
                onChange={handleChange}
                />
            <input
                type='text'
                placeholder='Age'
                className='AddToList-input'
                value={input.age}
                name='age'
                onChange={handleChange}
                />
            <input
                type='text'
                placeholder='Image Url'
                className='AddToList-input'
                value={input.img}
                name='img'
                onChange={handleChange}
                />
            <textarea
                placeholder='Notes'
                className='AddToList-input'
                value={input.note}
                name='note'
                onChange={handleChange}
            ></textarea>
            <button className='AddToList-btn' onClick={handleClick}>Add to List</button>
        </div>
    )
}

export default AddToList
