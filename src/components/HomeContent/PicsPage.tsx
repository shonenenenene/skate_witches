import { styled } from 'styled-components';
import { pics } from '../../constants';
import { useState, FC } from 'react';

const StyledPicsPage = styled.div`
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px 30px;
    @media (max-width: 970px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 632px) {
        grid-template-columns: repeat(2, 1fr);
    }
    img {
        cursor: pointer;
    }
`;

const PicsPage: FC = () => {
    const [picture, setPicture] = useState('');

    const picsComponent = (pic: string) => {
        const chosen = pics.find((e) => e.name === pic);
        switch (pic) {
            case 'aeth':
                return <img src={chosen?.pic} alt={chosen?.name} />;
            case 'bible':
                return <img src={chosen?.pic} alt={chosen?.name} />;
            case 'crystal':
                return <img src={chosen?.pic} alt={chosen?.name} />;
            case 'drift':
                return <img src={chosen?.pic} alt={chosen?.name} />;
            case 'drip':
                return <img src={chosen?.pic} alt={chosen?.name} />;
            case 'haunt':
                return <img src={chosen?.pic} alt={chosen?.name} />;
            case 'kitty':
                return <img src={chosen?.pic} alt={chosen?.name} />;
            case 'machete':
                return <img src={chosen?.pic} alt={chosen?.name} />;
            case 'moonchild':
                return <img src={chosen?.pic} alt={chosen?.name} />;
            case 'pepe':
                return <img src={chosen?.pic} alt={chosen?.name} />;
            case 'poles':
                return <img src={chosen?.pic} alt={chosen?.name} />;
            case 'ps1':
                return <img src={chosen?.pic} alt={chosen?.name} />;
            case 'sailor':
                return <img src={chosen?.pic} alt={chosen?.name} />;
            case 'shoe':
                return <img src={chosen?.pic} alt={chosen?.name} />;
            case 'synth':
                return <img src={chosen?.pic} alt={chosen?.name} />;
            default:
                return null;
        }
    };

    const clickHandler = (e: string) => {
        setPicture(e);
    };

    return (
        <StyledPicsPage style={Boolean(picture) ? { display: 'flex', justifyContent: 'center', alignItems: 'center' } : {}}>
            {!Boolean(picture)
                ? pics.map((e) => <img key={e.id} src={e.pic} alt={e.name} onClick={() => clickHandler(e.name)} />)
                : picsComponent(picture)}
        </StyledPicsPage>
    );
};

export default PicsPage;
