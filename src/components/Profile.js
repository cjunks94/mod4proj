import React from 'react';

import Reading from './Reading';

const Profile = (props) => {
    const {username, email, first_name, last_name, readings} = props.user
    const name = first_name && last_name ? first_name + ' ' + last_name : first_name ? first_name : username

    return (
        <div className="profile">
            <h2>{name}</h2>
            { email ? <p><strong>Email:</strong> {email}</p> : null}
            <p><strong>Readings:</strong> {readings.length}</p>
            <button className="button" id="edit" onClick={props.handleEditClick}>Edit</button>
            <h4><u>Your Recent Readings</u></h4> 
            { readings.map(reading => <Reading reading={reading} />).reverse()}
        </div>
    )
};

export default Profile;