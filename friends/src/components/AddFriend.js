import React from 'react';
import styled from 'styled-components';

const StyledAddFriend = styled.div`
    width: 50%;
    height: 500px;
    float: right;
    background-color: lightgray;
    margin-top: 27px;
    
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
                  type = 'email'
                  name = 'email'
                /><br></br>

                <input
                  type = 'submit'
                />
                    
            </form>
        </StyledAddFriend>
    )
        

    
}

export default AddFriend;