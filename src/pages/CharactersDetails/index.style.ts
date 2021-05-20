import styled from 'styled-components';

interface IBackgroundImg {
    urlImg: string;
}

const urlImg = (props: IBackgroundImg) => `${props.urlImg}`;

export const ContainerCharactersDetails = styled.main`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    padding: 120px;
    border-bottom: 100px solid red;
    flex-direction: column;
    align-items: flex-start;
    background: repeat center url(${urlImg});
    min-height: 100vh;

    @media (max-width: 660px) {
        align-items: center;
        padding: 40px;
    }

    @media (max-width: 410px) {
        align-items: center;
        padding: 0px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 15px;
    flex-direction: column;
    background-color: white;
    width: 100%;
    height: 100%;

    @media (max-width: 800px) {
        align-items: center;
    }
`;
