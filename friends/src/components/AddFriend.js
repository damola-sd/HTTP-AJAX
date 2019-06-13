import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledAddFriend = styled.div`
    width: 50%;
    height: 500px;
    float: right;
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

class AddFriend extends React.Component {

  state = {
    name: '',
    age: '',
    email: ''
  }

  nameInput = React.createRef();
  ageInput = React.createRef();
  emailInput = React.createRef();

  postNewFriend = () => {
    const newFriend = {
      name: this.nameInput.current.value,
      age: this.ageInput.current.value,
      email: this.emailInput.current.value
    };
    axios.post(friendServerUrl, newFriend)
      .then(() => console.log('new Friend added'))
  }
  render() {
    return (
      <StyledAddFriend>
        <h2>Add Friend</h2>
        <form>
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
            onClick= {this.postNewFriend}
          />

        </form>
      </StyledAddFriend>

    )
  }

}

export default AddFriend;