import React from 'react';
import {InputGroup,FormControl} from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'
import './Searchbar.style.css'
const SearchBar = () => {
    return (
        <div>
            <InputGroup className="mb-3 box-search">
                <FormControl
                className="search"
                placeholder="جستو جو کنید"
                aria-describedby="basic-search"
                />
                <InputGroup.Text id="basic-search"><FaSearch/></InputGroup.Text>
            </InputGroup>
        </div>
    );
}

export default SearchBar;
