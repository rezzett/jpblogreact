import React from 'react';
import AppSelect from "./AppSelect.jsx";
import AppInput from "./AppInput/AppInput.jsx";

export default  ({filter, setFilter}) => {
    return (
        <>
            <AppSelect
                value={filter.sort}
                onChange={selectSort => setFilter({...filter, sort: selectSort})}
                defaultValue="Sorting by"
                options={[
                    {value: "title", name: "By title"},
                    {value: "body", name: "By body"},
                ]}
            />
            <AppInput
                style={{"width": "40%", "height": "20px"}}
                placeholder="Search"
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
        </>
    );
};
