import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Friend from './Friend';
import AddFriend from './AddFriend';

const StyledFriendsList = styled.div`
    max-width: 800px;
    margin: 0 auto;
    
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
            .catch(error => {
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
                <AddFriend />
                {
                    this.state.friends.map(friend => (
                        <Friend key={friend.id} friend={friend} />
                    ))
                }



            </StyledFriendsList>

        )
    }
}