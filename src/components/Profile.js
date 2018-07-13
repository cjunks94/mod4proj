import React from 'react';

const Profile = (props) => {
    const {username, email, first_name, last_name, readings} = props.user
    const name = first_name && last_name ? first_name + ' ' + last_name : first_name ? first_name : username

    return (
        <div className="profile">
            <h2>{name}</h2>
            { email ? <p><strong>Email:</strong> {email}</p> : null}
            <button className="button" id="edit" onClick={props.handleEditClick}>Edit</button>
            { console.log(props.user.readings)}
        </div>
    )
};

export default Profile;