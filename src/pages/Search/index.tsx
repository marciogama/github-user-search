import axios from 'axios';
import React, { useState } from 'react';
import SimpleButton from '../../core/components/Button';

import './styles.css';

const BASE_URL = 'https://api.github.com/users';

function Search() {
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(`${BASE_URL}/${searchValue}`)
        axios(`${BASE_URL}/${searchValue}`)
    }
    return (
        <div className="container-search">

            <h1 className="title-search">Encontre um perfil Github</h1>
            <form className="form-sarch" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input-search"
                    placeholder="Usuário Github"
                    value={searchValue}
                    onChange={event => setSearchValue(event.target.value)}
                />

                <SimpleButton text="Encontrar" />

            </form>

        </div>

    );
}



export default Search;