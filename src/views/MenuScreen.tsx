import React from 'react';
import { Header } from '../components/Header';

function MenuScreen() {
    return (
        <div className="App">
            <div className="container">
                <Header navto="/"/>
                    <div className="Content">
                        <strong><p>This is menu content</p></strong>
                    </div>
            </div>
        </div>
    );
}

export default MenuScreen;