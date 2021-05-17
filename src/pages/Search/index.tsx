import axios from 'axios';
import React, { useState } from 'react';
import SimpleButton from '../../core/components/Button';

import './styles.css';

const BASE_URL = 'https://api.github.com/users';

type Users = 	{
    "avatar_url": string;
    "company": string;
    "blog": string;
    "location": string;
    "public_repos": Number;
    "followers": Number,
    "following": Number,
    "created_at": string
}

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [userData, setUserData] = useState<Users>();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUserData(undefined);
        
        axios(`${BASE_URL}/${searchValue}`)
            .then(response => setUserData(response.data))
            .catch(() => console.error('Houve um erro ao buscar os dados !!!'))

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

                {userData && (
                    <>
                        <div>
                            <strong>localidade</strong>
                            <span>{userData.location}</span>
                        </div>    
                    </>    
                )}

                

            </form>

        </div>

    );
}



export default Search;