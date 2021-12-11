import React, { useState } from "react";
// Styles
import { Wrapper, Image } from "./Actor.styles";
// Types 
type Props = {
    name: string;
    character: string;
    imageUrl: string;
};

const Actor: React.FC<Props> = ({ name, character, imageUrl }) => {

    const [isMouseOver, setIsMouseOver] = useState(false);

    const HandleMouseEnter = () => {
        setIsMouseOver(true);
    };

    const HandleMouseLeave = () => {
        setIsMouseOver(false);
    };
    return (
        <Wrapper onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave} >
            <Image src={imageUrl} alt='actor-thumb' isMouseOver={isMouseOver} />
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    )
};


export default Actor;