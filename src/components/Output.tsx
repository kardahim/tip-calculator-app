import React from 'react'

interface OutputData {
    title?: string
    result?: number
}

function Output(props: OutputData) {
    return (
        <div className='output-container'>
            <div className='output-labels'>
                <span className='output-title'>{props.title}</span>
                <span className='output-subtitle'>/ person</span>
            </div>
            <div className='output-result'>${(props.result)?.toFixed(2)}</div>
        </div>
    )
}

export default Output