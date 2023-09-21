import React from 'react';
import { Header } from '../components/Header';

function MenuScreen() {
    return (
        <div className="App">
            <div className="container">
                <Header navto="/"/>
                    <div className="Content">
                        <p className='menuText'>This is menu content</p>
                    </div>
            </div>
        </div>
    );
}

export default MenuScreen;