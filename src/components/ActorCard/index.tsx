import React, { useState } from "react";
// Router
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Image } from "./ActorCard.styles";
// Types 
type Props = {
    name: string;
    character: string | null;
    imageUrl: string;
    clickable: boolean;
    hoverable: boolean;
    actorId: number;
    movieTitle: string;
    movieId: number;
};

const Actor: React.FC<Props> = ({ name, character, imageUrl, clickable, hoverable, actorId, movieTitle, movieId }) => {

    const [isMouseOver, setIsMouseOver] = useState(false);

    const HandleMouseEnter = () => {
        if (imageUrl !== '/static/media/no_image.22d2aa4d.jpg') setIsMouseOver(true);
    };

    const HandleMouseLeave = () => {
        if (imageUrl !== '/static/media/no_image.22d2aa4d.jpg') setIsMouseOver(false);
    };
    return (
        <>
            {clickable ?
                <Link to={`/actor/${movieTitle}/${movieId}/${actorId}`} style={{ textDecoration: 'none' }}>
                    <Wrapper onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave} >
                        <Image src={imageUrl} alt='actor-thumb' isMouseOver={isMouseOver} />
                        <h3>{name}</h3>
                        <p>{character}</p>
                    </Wrapper>
                </Link> :
                hoverable ?
                    <Wrapper onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave} >
                        <Image src={imageUrl} alt='actor-thumb' isMouseOver={isMouseOver} />
                        <h3>{name}</h3>
                        <p>{character}</p>
                    </Wrapper> :
                    <Wrapper >
                        <Image src={imageUrl} alt='actor-thumb' isMouseOver={true} />
                        <h3>{name}</h3>
                        <p>{character}</p>
                    </Wrapper>
            }
        </>
    )
};


export default Actor;