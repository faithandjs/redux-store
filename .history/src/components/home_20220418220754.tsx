import React, { useEffect } from 'react';

function Home() {

    return (
        <div>
            hi
        </div>
        
    );
}

const mapState = (state:any) => {
    posts: state.posts.items
}

export default Home;