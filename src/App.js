import React from 'react';
import TextInputWithAutoComplete from './TextInputWithAutoComplete';

const App = () => {
    const initialOptions = ['яблоко', 'яблище', 'яблоня', 'ярыга', 'ягермейстер'];

    return (
        <div>
            <h1>Автозаполнение</h1>
            <TextInputWithAutoComplete options={initialOptions} />
        </div>
    );
};

export default App;
