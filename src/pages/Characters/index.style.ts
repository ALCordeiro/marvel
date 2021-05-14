import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    padding: 120px;
`;

export const MoreCharactersContainer = styled.div`
    position: fixed;
    top: 95%;
    right: 10%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    cursor: pointer;
`;
