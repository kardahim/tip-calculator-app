import React from 'react'

interface TipsData {
    title?: string
    error?: string
    icon?: string
    type?: string
}

function Tips(props: TipsData) {
    return (
        <div className='tips-container'>
            <div className='tip-labels'>
                <span>{props.title}</span>
                <span className='error-label'>{props.error}</span>
            </div>
            <div className='tips'>
                <button>5%</button>
                <button>10%</button>
                <button>15%</button>
                <button>25%</button>
                <button>50%</button>
                <input placeholder='Custom' min={1} step={1} />
            </div>
        </div>
    )
}

export default Tips