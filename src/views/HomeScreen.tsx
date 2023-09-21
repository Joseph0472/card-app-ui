import React from 'react';
import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { Form } from '../components/Form';

function HomeScreen() {
    return (
        <div className="App" data-testid="home-screen">
            <div className="container">
                <Header navto="/menu"/>
                <Content initialUserData={{
                    FirstName: "Joseph",
                    LastName: "Jiang"
                }}/>
                <Form />
            </div>
        </div>
    );
}

export default HomeScreen;