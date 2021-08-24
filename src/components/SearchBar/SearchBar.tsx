import React from 'react';
import {InputGroup,FormControl} from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import {setTextFilter} from '../../Action/Filter.'
import './Searchbar.style.css'
const SearchBar = () => {
    const inputValue = useSelector((state:any) => state.filters.name)
    const dispatch = useDispatch()
    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value 
        dispatch(setTextFilter(value))
        
    }
    console.log(inputValue)
    return (
        <div>
            <InputGroup className="mb-3 box-search">
                <FormControl
                className="search"
                placeholder="جستو جو کنید"
                aria-describedby="basic-search"
                value={inputValue}
                onChange={handleSearch}
                />
                <InputGroup.Text  id="basic-search"><FaSearch/></InputGroup.Text>
            </InputGroup>
        </div>
    );
}

export default SearchBar;
