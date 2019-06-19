import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledUpdateFriend = styled.div`
    width: 50%;
    height: 500px;
    
    background-color: lightgray;
    
    h2 {
      margin-left: 10px;
    }
    form {
      margin-left: 15px;

      input {
        margin: 10px;
      }

      .submit {
        padding: 10px;
        font-size: 15px;
        background-color: orange;
        margin-left: 35%;
      }
    }

`;
const friendServerUrl = 'http://localhost:5000/friends';
class UpdateFriend extends React.Component {

    // state = {
    //   name: '',
    //   age: '',
    //   email: ''
    // }
    idInput = React.createRef();
    nameInput = React.createRef();
    ageInput = React.createRef();
    emailInput = React.createRef();

    updateFriend = () => {
        const id = this.idInput.current.value;
        const newFriend = {
            name: this.nameInput.current.value,
            age: this.ageInput.current.value,
            email: this.emailInput.current.value
        };
        axios.put( `${friendServerUrl}/${id}`, newFriend)
            .then(() => console.log('Friend updated'))
    }


    render() {
        return (
            <StyledUpdateFriend>
                <h2>Update Friend</h2>
                <form>
                    Id:
                  <input
                        type='number'
                        placeholder='Enter ID'
                        name='id'
                        ref={this.idInput}
                    /><br></br>
                    Name:
                  <input
                        type='text'
                        placeholder='Enter name'
                        name='name'
                        ref={this.nameInput}
                    /><br></br>
                    Age:
                  <input
                        type='number'
                        name='dob'
                        ref={this.ageInput}
                    /><br></br>
                    Email:
                  <input
                        placeholder='Enter E-mail'
                        type='email'
                        name='email'
                        ref={this.emailInput}
                    /><br></br>

                    <input
                        className='submit'
                        type='submit'
                        onClick={this.updateFriend}
                    />

                </form>
            </StyledUpdateFriend>

        )
    }

}

export default UpdateFriend;