import React, { useState } from 'react';
import SimpleButton from '../../core/components/Button';
import { User } from '../../core/types/User';
import { makeRequest } from '../../core/utils/request';
import UserCard from './components/UserCard';

import './styles.css';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [userData, setUserData] = useState<User>();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUserData(undefined);
        
        makeRequest({ url: searchValue })
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
                <div className="button-find">
                    <SimpleButton text="Encontrar" />
                </div>

                {userData && (
                    <>
                        <UserCard user={userData} />
                    </>    
                )}

                

            </form>

        </div>

    );
}



export default Search;