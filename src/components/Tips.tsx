import React from 'react'

interface TipsData {
    title: string
}

function Tips(props: TipsData) {
    return (
        <div className='tips-container'>
            <div className='tip-labels'>
                <span>{props.title}</span>
            </div>
            <div className='tips'>
                <button>5%</button>
                <button>10%</button>
                <button>15%</button>
                <button>25%</button>
                <button>50%</button>
                <input placeholder='Custom' type='number' min={1} step={1} />
            </div>
        </div>
    )
}

export default Tips