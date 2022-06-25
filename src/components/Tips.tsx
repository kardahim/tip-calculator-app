import React from 'react'

interface TipsData {
    title: string
    passData: any
}

function Tips(props: TipsData) {

    const calculate = (percent: HTMLInputElement) => {
        // inputs
        let bill: number = parseFloat((document.getElementById('bill-input') as HTMLInputElement).value);
        let persons: number = parseInt((document.getElementById('person-input') as HTMLInputElement).value);

        if (isNaN(bill) || bill === 0) {
            (document.getElementById('bill-error') as HTMLElement).style.visibility = 'visible';
            (document.getElementById('bill-input') as HTMLInputElement).style.border = '2px solid #B47D6E';
        }

        if (isNaN(persons) || persons == 0) {
            (document.getElementById('person-error') as HTMLElement).style.visibility = 'visible';
            (document.getElementById('person-input') as HTMLInputElement).style.border = '2px solid #B47D6E';
        }

        if (!isNaN(persons) && !isNaN(bill) && persons !== 0 && bill !== 0) {
            let tip: number = (parseFloat(percent.value) * bill / 100) / persons;
            let total: number = bill / persons + tip;

            if (isNaN(tip)) tip = 0;
            if (isNaN(total)) total = 0;

            props.passData(tip, total);
        }
    }

    return (
        <div className='tips-container'>
            <div className='tip-labels'>
                <span>{props.title}</span>
            </div>
            <div className='tips'>
                <button name='tips-btns' value={5} onClick={(e) => calculate((e.target as HTMLInputElement))}>5%</button>
                <button name='tips-btns' value={10} onClick={(e) => calculate((e.target as HTMLInputElement))}>10%</button>
                <button name='tips-btns' value={15} onClick={(e) => calculate((e.target as HTMLInputElement))}>15%</button>
                <button name='tips-btns' value={25} onClick={(e) => calculate((e.target as HTMLInputElement))}>25%</button>
                <button name='tips-btns' value={50} onClick={(e) => calculate((e.target as HTMLInputElement))}>50%</button>
                <input placeholder='Custom' type='number' min={1} step={1} onChange={(e) => calculate((e.target as HTMLInputElement))} id='custom-tip' />
            </div>
        </div>
    )
}

export default Tips