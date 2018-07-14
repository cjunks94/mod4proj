import React from 'react';
import Profile from './components/Profile';
import Form from './components/Form';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            user: props.user,
            onEdit: false,
            fields: {
                username: props.user.username,
                firstName: props.user.first_name,
                lastName: props.user.last_name,
                email: props.user.email
            },
            data: {}
        }
    }

    updateUser = () => {
        const options = {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(this.state.data)
        }
        fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, options)
        .then(resp => resp.json())
        .then(user => this.setState({
            user
        }))
    }

    deleteReading = (id) => {
        const options = {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            }
        }
        fetch(`http://localhost:3000/api/v1/readings/${id}`, options)
        .then( resp => {

            this.setState({
                user: {
                    ...this.state.user, 
                    readings: this.state.user.readings.filter( reading => parseInt(reading.reading_id) !== parseInt(id))
                }
            })
        })
    }

    handleEditClick = () => {
        this.setState({
            onEdit: true
        })
    }

    handleEditChange = (e) => {
        const name = e.target.name.replace(/_([a-z])/g, (str) => str[1].toUpperCase() )
        const newFields = { ...this.state.fields, [name]: e.target.value };

        this.setState({ 
          fields: newFields, 
          data: {...this.state.data, [e.target.name]: e.target.value}
        });
    }

    handleEditSubmit = (e) => {
        e.preventDefault;
        console.log('submitted');
        this.updateUser();
        this.setState({
            onEdit: false
        });
    }

    handleDeleteClick = (e) => {
        const id = e.target.parentElement.id
        this.deleteReading(id)
    }

    render() {
        return (
            <div className="profile page-body">
                { this.state.onEdit ? 
                    <Form fields={this.state.fields} handleSubmit={this.handleEditSubmit} handleChange={this.handleEditChange}/> : 
                    <Profile user={this.state.user} handleEditClick={this.handleEditClick} handleDeleteClick={this.handleDeleteClick} />}
                {/* renders edit form */}
            </div>
        )
    }
};

export default ProfileContainer;