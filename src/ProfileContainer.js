import React from 'react';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (<div className="profile">
            Profile Page
        </div>)
    }
};

export default ProfileContainer;