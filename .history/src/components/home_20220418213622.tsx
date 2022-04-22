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

export default connect(null, {fetchPosts})(Home);