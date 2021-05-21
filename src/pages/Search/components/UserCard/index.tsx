import React from 'react';
import SimpleButton from '../../../../core/components/Button';
import { User } from '../../../../core/types/User';

import './styles.css';
import dayjs from 'dayjs';

type Props = {
    user: User
}

const UserCard = ({ user }: Props) => (
    <div className="container-information">

        <div className="colImage">
            <img src={user.avatar_url} alt="Avatar do usuário Github" className="user-image" />
            <div className="button-see-profile">
                <SimpleButton text="Ver perfil" />
            </div>
        </div>
        <div className="colInfo user-card">

            <div className="user-information-one">
                <div className="user-posted">
                    Repositorios públicos:
                <span className="-span-user-information">
                        {user.public_repos}
                </span>
                </div>
                <div className="user-followers">
                    Seguidores:
                <span className="span-user-information">
                    {user.followers}
                </span>
                </div>
                <div className="user-following">
                    Seguindo:
                <span className="span-user-information">
                    {user.following}
                </span>
                </div>
            </div>
            <div className="user-information-two">
                <h3 className="information-two-title">Informações</h3>
                <div className="information-two-company">empresa:
                    <span className="span-user-information">
                        {user.company}
                    </span>
                </div>
                <div className="information-two-website">Website/Blog:
                    <span className="span-user-information">
                        {user.blog}    
                    </span>
                </div>
                <div className="information-two-location">Localidade:
                    <span className="span-user-information">
                        {user.location}
                    </span>
                </div>
                <div className="information-two-membersince">Membro desde:
                    <span className="span-user-information">
                        {dayjs(user.created_at).format('DD/MM/YYYY')}
                    </span>
                </div>
            </div>
        </div>
    </div>
);

export default UserCard;