import React from 'react'

import './Best.css'

const Best = () => {
    return (
        <div className='best'>
            <h1>Find Best eye conic travel place</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Luxury travel</p>
                <p>Adventure travel</p>
                <p>Cultural travel</p>
            </div>
            <div className='container'>
                <img src={'https://i.ytimg.com/vi/UcrPqL-qE7c/maxresdefault.jpg'} alt='' />
                <img src={"https://www.indiafilings.com/learn/wp-content/uploads/2015/07/Adventure-Travel-Business-e1437168928152.jpg"} alt='' />
                <img src={"https://citizenjournal.net/wp-content/uploads/2017/07/best-adventure-travel-destinations-680x350.jpg"} alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best
