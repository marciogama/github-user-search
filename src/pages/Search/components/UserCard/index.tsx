import React from 'react';
import { ReactComponent as UserImage } from '../../../../core/assets/images/product.svg';

import './styles.css'

const UserCard = () => (
    <div className="user-card">
        
        <UserImage className="user-image"/>
        <div className="user-information-one">
            <div>Repositorios postados</div>
            <div>Seguidores</div>
            <div>Seguindo</div>
        </div>
        <div className="user-information-two">
            <h3>informações</h3>
            <div>empresa: @ZupIT</div>
            <div>Website/Blog: https:thewashington.dev</div>
            <div>Localidade: Uberlândia</div>
            <div>Membro desde: 19/10/2013</div>
        </div>

    </div>
);

export default UserCard;