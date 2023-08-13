import { AsyncPaginate } from "react-select-async-paginate"
import { useState } from "react";
import { GEO_API_URL, geoApiOpstions } from "../../api";
const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData)=>{
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/adminDivisions?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOpstions)
        .then((response) => response.json())
        .then((response) => {
            return {
                options:response.data.map((city)=>{
                    return {
                        value:`${city.latitude} ${city.longitude}`,
                        label:`${city.name}, ${city.countryCode}`
                    }
                })
            }
        })
        .catch((error) => console.log(error));
    }
    return (
        <AsyncPaginate
            placeholder="Search for City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            />
    )
}
export default Search