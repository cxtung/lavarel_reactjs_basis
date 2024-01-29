import React from 'react'
import { useState, useEffect } from 'react';
import { categoryApi } from './../Api/categoryApi';
import SelectBox from './SelectBox';


export default function CategorySelect(props) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const handleChange = props.handleChange;
    var myView = loading === true ? <select><option>loading categories....</option></select> : <SelectBox name='category' defaultValue={0} data={categories
    } handleChange={handleChange} />;

    useEffect(() => {
        const fetchData = async () => {
            var response = await categoryApi.getAll();
            var temp = response.data.data;
            setCategories(temp.map(category => {
                return {
                    label: category.attributes.categoryName,
                    value: category.id
                }
            }));
            console.log(response);
            setLoading(false);
        };
        fetchData();
    }, []);
    return (
        <>
            {myView}
        </>
    )
}