import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import {fetchPosts} from '../actions/postActions'

function Home() {
    useEffect(
        () => {
            fetchPosts()
            console.log('here')
        }
    )

    return (
        <div>
            hi
        </div>
        
    );
}

const mapState = (state:any) => {
    posts: state.posts.items
}

export default connect(null, {fetchPosts})(Home);