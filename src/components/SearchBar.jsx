import FormItemLabel from 'antd/es/form/FormItemLabel';
import { Input } from 'antd';
import React, { useState } from 'react';

function SearchBar({ onChange }) {
    const [ query, setQuery ] = useState('');


    return (
      <>
            <FormItemLabel label="Search" />
            <Input 
            value={query}
             onChange={({target}) => {
                setQuery(target.value);
                onChange(target.value);
            }}
            />
            </>
    );
}



export default SearchBar;