import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className='gpt3__header section__padding'>
            <div className="gpt3__header-content">
                <h1>
                    Let's Build Something amazing with GPT-3 Open AI
                </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus recusandae tempora ipsa nihil harum! Inventore facere cupiditate cumque laudantium, eaque corrupti nostrum est iure unde fugiat necessitatibus quia aperiam debitis!</p>

                <div className="gpt3__header-content_input">
                    <input type="text" name="" placeholder='Enter Your Email' />
                    <button>Get Started</button>
                </div>
                <div className="gpt3__header-content_people">
                    <img src={people} alt="people" />
                    <p>1600 people requested access a visit in last 24 hours.</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>

        </div>
    )
}

export default Header