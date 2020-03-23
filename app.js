import React, { Component } from 'react'

export class App extends Component {
    render() {
        return (
            <div>
                <h1>welcome, React</h1>
                <p>jsx performance</p>
                <div className="servic">
                    <header className="demo">
                        <img src={require('../images/React.png')} alt="logo" className="logo-class" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">

                            Learn React
                         </a>
                    </header>

                </div>
                <div className="social_container">
                    <a className="social_media" href="https://www.instagram.com/css__26" rel="svg logo" target="_blank"> <i className="fab fa-instagram"></i></a>
                    <a className='social_media' target='_blank' href="https://github.com/alighnbri"> <i className='fab fa-github'></i></a>
                    <a className='social_media' target='_blank' href="#"> <i className='fab fa-twitter'></i></a>
                    <a className='social_media' target='_blank' href="#"> <i className='fab fa-youtube'></i></a>
                    <a className='social_media' target='_blank' href="#"> <i className='fas fa-truck-monster fa-spin'></i></a>
                    <a className='social_media' target='_blank' href="#"> <i className='fas fa-skull fa-lg'></i></a>
                </div>
            </div>
        )
    }
}

export default App

