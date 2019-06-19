import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Friend from './Friend';
import AddFriend from './AddFriend';
import UpdateFriend from './UpdateFriend';

const StyledFriendsList = styled.div`
    max-width: 800px;
    margin: 0 auto;
    
`;
const friendServerUrl = 'http://localhost:5000/friends';

export default class FriendsList extends React.Component {
    state = {
        friends: [],
        errorMessage: '',

    }

    getFriends = () => {
        axios.get(friendServerUrl)
            .then(response => {

                this.setState({ friends: response.data });
            })
            .catch(error => {
                this.setState({ errorMessage: error.message });
            })
            .finally(() => {

            });
    }

    deleteFriend = (id) => {
        axios.delete(`${friendServerUrl}/${id}`)
            .then(() => this.componentDidUpdate);
    }


    componentDidMount() {
        this.getFriends();
    }

    componentDidUpdate() {
        this.getFriends();
    }

    render() {
        return (
            <StyledFriendsList>
                <AddFriend />

                {
                    this.state.friends.map(friend => (
                        <Friend key={friend.id} friend={friend} delete = {this.deleteFriend} />
                    ))
                }


                <UpdateFriend />
            </StyledFriendsList>

        )
    }
}