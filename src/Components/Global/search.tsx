import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../../utils/scss/components.search.scss';

const Search = () => {
    const navigate = useNavigate();
    const onSubmit = (e:any) => {
        e.preventDefault();
        const ruta = "/search/" + e.target.elements.search.value.toLowerCase();
        navigate(ruta);
    }

    return(
        <div className='global__search'>
          <div className='search__form'>
            <form onSubmit={onSubmit}>
                <label>Buscar:</label>
                <input id='search' name='search' placeholder='Buscar...' />
            </form>
          </div>
        </div>
    )
}

export default Search;