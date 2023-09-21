import React from 'react';
import { Content } from '../components/Content';

function HomeScreen() {
    return (
        <div className="App">
            <div className="container">
                <Content initialUserData={{
                    FirstName: "Joseph",
                    LastName: "Jiang"
                }}/>
            </div>
        </div>
    );
}

export default HomeScreen;