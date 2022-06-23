import React from 'react'
import { useState } from 'react'
import App from '../App'

interface TipsData {
    title: string,
    passData: any
}

function Tips(props: TipsData) {

    const calculate = (percent: HTMLInputElement) => {
        // inputs
        let bill: number = parseFloat((document.getElementById('bill-input') as HTMLInputElement).value)
        let persons: number = parseInt((document.getElementById('person-input') as HTMLInputElement).value)

        if (isNaN(bill)) {
            console.log("bill error")
        }

        if (isNaN(persons)) {
            console.log("person error")
        }

        if (!isNaN(persons) && !isNaN(bill)) {
            let tip: number = (parseFloat(percent.value) * bill / 100) / persons
            let total: number = bill / persons + tip

            if (isNaN(tip)) tip = 0
            if (isNaN(total)) total = 0

            props.passData(tip, total)
        }
    }

    return (
        <div className='tips-container'>
            <div className='tip-labels'>
                <span>{props.title}</span>
            </div>
            <div className='tips'>
                <button name='tips-btns' value={5} onClick={(e) => calculate((e.target as HTMLInputElement))}>5%</button>
                <button name='tips-btns' value={5} onClick={(e) => calculate((e.target as HTMLInputElement))}>10%</button>
                <button name='tips-btns' value={15} onClick={(e) => calculate((e.target as HTMLInputElement))}>15%</button>
                <button name='tips-btns' value={25} onClick={(e) => calculate((e.target as HTMLInputElement))}>25%</button>
                <button name='tips-btns' value={50} onClick={(e) => calculate((e.target as HTMLInputElement))}>50%</button>
                <input placeholder='Custom' type='number' min={1} step={1} onChange={(e) => calculate((e.target as HTMLInputElement))} />
            </div>
        </div>
    )
}

export default Tips