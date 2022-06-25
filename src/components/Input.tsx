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
    error_id: string
}

function Input(props: InputData) {
    return (
        <div className='long-input'>
            <div className='input-labels'>
                <span>{props.title}</span>
                <span className='error-label' id={props.error_id}>{props.error}</span>
            </div>
            <div className='input-container'>
                <input type="number" placeholder="0" min={0} step={(props.type === "int") ? 1 : 0.01} id={props.id} onFocus={(e) => { (e.target as HTMLInputElement).style.border = 'hsl(172, 67%, 45%) 2px solid'; (document.getElementById(props.error_id) as HTMLElement).style.visibility = 'hidden' }} onBlur={(e) => (e.target as HTMLInputElement).style.border = 'none'} />
                {(props.icon === "dollar") ? <img src={dollar} alt='dollar' /> : <img src={person} alt='person' />}
            </div>
        </div>
    )
}

export default Input