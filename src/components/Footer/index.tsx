import React, { useContext } from "react";
// Context
import { LoadingContext } from "../../context";
// Styles
import { Wrapper, Content } from './Footer.styles';

const Footer: React.FC = () => {

    const [loadingGlobal] = useContext(LoadingContext);

    return (
        <>
            {!loadingGlobal && <Wrapper>
                <Content>
                    <p>José Marinho</p>
                </Content>
            </Wrapper>}
        </>
    )
};

export default Footer;