import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Friend from './Friend';
import AddFriend from './AddFriend';

const StyledFriendsList = styled.div`
    max-width: 800px;
    position: relative;
    
`;
const StyledAddFriend = styled.div`
    width: 50%;
    height: 500px;
    
`;

export default class FriendsList extends React.Component {
    state = {
        friends: [],
        errorMessage: '',

    }

    getFriends = () => {
        axios.get('http://localhost:5000/friends')
            .then(response => {
                
                this.setState({ friends: response.data });
            })
            .catch (error => {
                this.setState({ errorMessage: error.message });
            })
            .finally(() => {
                
            });
    }

    componentDidMount() {
        this.getFriends();
    }

    render() {
        return (
            <StyledFriendsList>
                {
                    this.state.friends.map(friend => (
                        <Friend key={friend.id} friend={friend}/>
                    ))
                }
                <StyledAddFriend>
                    <AddFriend/>
                </StyledAddFriend>

                
            </StyledFriendsList>

        )
    }
}