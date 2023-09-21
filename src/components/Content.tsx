import React from "react";

interface IUser {
    FirstName: string;
    LastName:  string;
}

export const Content = ({ initialUserData }: { initialUserData: IUser }) => {
    // Use React hook to manage state
    // Can be transmitted from parent component by props. I set the user directly here as no auth part in the assessment project.
    const [user, setUser] = React.useState<IUser | null>(initialUserData);

    // Do something else when our user is null
    if (!user) {
        return (
            <div className="Content">
                <h4>Welcome, guest</h4>
            </div>
        );
    } else {  
        return (
            <div className="Content">
            <h4>Welcome, {user?.FirstName}</h4>
            </div>
        );
    }
  }