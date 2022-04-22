import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

function Home() {
    
    return (
        <Provider store={store}>
            <div>
                hi
            </div>
        </Provider>
        
    );
}

export default Home;