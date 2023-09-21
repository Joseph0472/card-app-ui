import React from 'react';
import { Header } from '../components/Header';
import { Content } from '../components/Content';

function HomeScreen() {
    return (
        <div className="App">
            <div className="container">
                <Header navto="/menu"/>
                <Content initialUserData={{
                    FirstName: "Joseph",
                    LastName: "Jiang"
                }}/>
            </div>
        </div>
    );
}

export default HomeScreen;