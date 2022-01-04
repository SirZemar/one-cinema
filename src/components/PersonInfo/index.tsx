import React from "react";
// Components
// Styles
import { Wrapper, Content, Thumb, Text } from "./PersonInfo.styles";
// Types
import { PersonState } from "../../hooks/usePersonFetch";
// Helpers
import { calculateAge, changeDateFormat } from "../../helpers"
type Props = {
    person: PersonState;
    imageUrl: string;
}

const PersonInfo: React.FC<Props> = ({ person, imageUrl }) => {

    const birth = person.birthday;
    const death = person.deathday;
    const isDead = new Date(death).getTime() !== 0;

    const age = calculateAge(birth, death, isDead);

    const birthday = changeDateFormat(birth);
    const deathday = changeDateFormat(death);

    return (
        <Wrapper>
            <Content>
                <Thumb>
                    <img src={imageUrl} alt={person.name} />
                </Thumb>
                <Text>
                    <h1>{person.name}</h1>
                    <h3>Age: {age.toString()}<span>{isDead ? ' (Deceased)' : null}</span></h3>
                    <h3>Born: {birthday}</h3>
                    {isDead && <h3>Died: {deathday}</h3>}
                    <h2>Biography</h2>
                    <p>{person.biography}</p>
                </Text>
            </Content>
        </Wrapper>
    )
};

export default PersonInfo;