import React from 'react';
import SearchBar from './components/SearchBar';
import UserReviewList from './components/UserReviewList';

function Home(props) {
    return (
        <div>
            <SearchBar />
            <UserReviewList />
        </div>
    );
}

export default Home;


