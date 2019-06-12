import React from 'react';
// import styled from 'styled-components';



const AddFriend = () => {
    return (
        <div>
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
        </div>
    )
        

    
}

export default AddFriend;