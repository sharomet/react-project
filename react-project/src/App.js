import React from 'react';
import './assets/scss/app.scss';

import PrimaryNav from './components/primaryNav/PrimaryNav'
import WrapperContent from './components/wrapperContent/WrapperContent'

function App() {
    return (
        <div className="App">
            <PrimaryNav/>
            <WrapperContent/>
        </div>
    );
}

export default App;
