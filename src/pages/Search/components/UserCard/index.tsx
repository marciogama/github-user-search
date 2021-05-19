import React from 'react';
import { ReactComponent as UserImage } from '../../../../core/assets/images/product.svg';
import SimpleButton from '../../../../core/components/Button';

import './styles.css'

const UserCard = () => (
    <div className="container-information">

        <div className="colImage">
            <UserImage className="user-image" />
            <div className="button-see-profile">
                <SimpleButton text="Ver perfil" />
            </div>
        </div>
        <div className="colInfo user-card">

            <div className="user-information-one">
                <div className="user-posted">
                    Repositorios públicos:
                <span className="-span-user-information">
                        62
                </span>
                </div>
                <div className="user-followers">
                    Seguidores:
                <span className="span-user-information">
                        127
                </span>
                </div>
                <div className="user-following">
                    Seguindo:
                <span className="span-user-information">
                        416
                </span>
                </div>
            </div>
            <div className="user-information-two">
                <h3 className="information-two-title">Informações</h3>
                <div className="information-two-company">empresa:
                    <span className="span-user-information">@ZupIT</span>
                </div>
                <div className="information-two-website">Website/Blog:
                    <span className="span-user-information">
                        https:thewashington.dev
                    </span>
                </div>
                <div className="information-two-location">Localidade:
                    <span className="span-user-information">
                        Uberlândia
                    </span>
                </div>
                <div className="information-two-membersince">Membro desde:
                    <span className="span-user-information">
                        19/10/2013
                    </span>
                </div>
            </div>
        </div>
    </div>
);

export default UserCard;