import React from 'react';
import styled from 'styled-components';

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




const AddFriend = () => {
    return (
        <StyledAddFriend>
            <h2>Add Friend</h2>
            <form>
                First Name:   
                <input
                  type = 'text'
                  placeholder = 'Enter name'
                  name = 'name'
                /><br></br>
                Date of Birth:   
                <input
                  type = 'date'
                  name = 'dob'
                /><br></br>
                Email:  
                <input
                  placeholder = 'Enter E-mail'
                  type = 'email'
                  name = 'email'
                /><br></br>

                <input
                  className = 'submit'
                  type = 'submit'
                />
                    
            </form>
        </StyledAddFriend>
    )
        

    
}

export default AddFriend;