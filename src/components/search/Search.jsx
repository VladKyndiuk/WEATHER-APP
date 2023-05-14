import { AsyncPaginate } from 'react-select-async-paginate';
import {useState} from 'react'
import {options,API_URL} from '../../api/citiesApi'


import './react-select.scss'

function Search({onSearchChange}) {
    const [search, setSearch] = useState(null)

    const onChangeSearch = (searchValue) => {
        setSearch(searchValue);
        onSearchChange(searchValue);

    }
    
    const loadOptions = (searchValue,label) => {
      return fetch(`${API_URL}/cities?minPopulation=1000000&namePrefix=${searchValue}`, options)
	.then((response) => response.json())
	.then((response) => { 
        return{

        options: response.data.map((city)=>{
            return{
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`
            }


        })  
        }
    })
	.catch(err => console.error(err));

    }

    




    return ( 
        <AsyncPaginate
        classNamePrefix='custom_select'
        className='search' 
        debounceTimeout={600} 
        value={search} 
        placeholder='Search for City'
        onChange={onChangeSearch} 
        loadOptions={loadOptions}
        />
     );
}

export default Search;