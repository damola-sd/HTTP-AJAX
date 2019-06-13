import React from'react';
import styled from 'styled-components';

const StyledFriend = styled.div`
    height: 180px;
    width: 48%;
    margin-bottom: 10px;
    background-color: lightsteelblue;
    box-shadow: 5px 5px gray;

    div {
        font-weight: bold;
        font-size: 15px;
        padding: 5px;
        margin-left: 8px;
    }

    button {
        background-color: orange;
        border-radius: 10px;
        padding: 8px;
        font-size: 15px;
        margin-left: 130px;
        cursor: pointer;
    }
`;
const Friend = (props) => {
    return (
        <StyledFriend>
            <div>Id: {props.friend.id}</div>
            <div>Name: {props.friend.name}</div>
            <div>Age: {props.friend.age}</div>
            <div>Email: {props.friend.email}</div>

            {/* <button>Update</button> */}
            <button
              onClick = {() => props.delete(props.friend.id)}>Delete</button>
        </StyledFriend>
    )
   
}


export default Friend;