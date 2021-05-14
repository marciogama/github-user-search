import React from 'react';
import './styles.css'

type Props = {
    text: string;
}

const SimpleButton = ({ text }: Props) => (

    <div className="simpleBtn">
        <button className="textButton no-outline">
            {text}
        </button>
    </div>
);

export default SimpleButton;