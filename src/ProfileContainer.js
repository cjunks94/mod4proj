import React from 'react';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            fields: props.user,
            onEdit: false
        }
    }

    handleEditClick = () => {
        console.log('clicked');
    }

    handleEditSubmit = () => {
        console.log('submitted');
    }

    render() {
        const {username, email, first_name, last_name, readings} = this.state.fields
        const name = first_name && last_name ? first_name + ' ' + last_name : first_name ? first_name : username
        
        return (
            <div className="profile page-body">
                <h2>{name}</h2>
                { email && <p><strong>Email:</strong> {email}</p> }
                <button className="button" id="edit" onClick={this.handleEditClick}>Edit</button>
                {/* render readings */}
                {/* renders edit form */}
            </div>
        )
    }
};

export default ProfileContainer;