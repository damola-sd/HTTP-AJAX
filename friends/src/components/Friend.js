import React from'react';
import styled from 'styled-components';

const StyledFriend = styled.div`
    height: 150px;
    width: 50%;
    margin: 0 auto;
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
    }
`;
const Friend = (props) => {
    return (
        <StyledFriend>
            <div>Name: {props.friend.name}</div>
            <div>Age: {props.friend.age}</div>
            <div>Email: {props.friend.email}</div>

            <button>Delete</button>
        </StyledFriend>
    )
   
}

export default Friend;