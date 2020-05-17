import React from 'react';
import DefaultView from '../Component/DefaultView';

const App = ({ Component }) => {
    return (
        <div>
            <DefaultView>
                <Component />
            </DefaultView>
        </div>
    );
};

export default App;