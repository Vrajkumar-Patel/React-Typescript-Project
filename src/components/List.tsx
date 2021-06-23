import React from 'react';
import {Istate as Iprops} from '../App'
  

const List: React.FC<Iprops> = ({people}) => {
    return (
        <ul>
            {people?.map((person) => (
                <li className='List'>
                    <div className='List-header'>
                        <img className='List-img' src={person.url}></img>
                        <h2>{person.name}</h2>
                    </div>
                    <p>{ person.age} years old</p>
                    <p className='List-note'>{ person.note}</p>

                </li>
            ) )}
        </ul>
    )
}

export default List
