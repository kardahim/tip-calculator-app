import React from 'react'

// icons
import person from '../assets/icon-person.svg'
import dollar from '../assets/icon-dollar.svg'

interface InputData {
    title: string
    error: string
    icon: string
    type: string
    id: string
}

function Input(props: InputData) {
    return (
        <div className='long-input'>
            <div className='input-labels'>
                <span>{props.title}</span>
                <span className='error-label'>{props.error}</span>
            </div>
            <div className='input-container'>
                <input type="number" placeholder="0" min={0} step={(props.type === "int") ? 1 : 0.01} id={props.id} />
                {(props.icon === "dollar") ? <img src={dollar} /> : <img src={person} />}
            </div>
        </div>
    )
}

export default Input