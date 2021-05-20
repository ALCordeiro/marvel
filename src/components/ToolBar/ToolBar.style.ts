import styled from 'styled-components';

export const ToolBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 25px 120px;
    height: 85px;
    align-items: center;
    flex-direction: row;

    @media (max-width: 1355px) {
        flex-direction: column;
        margin-bottom: 50px;
    }

    @media (max-width: 630px) {
        padding: 25px 40px;
    }

    @media (max-width: 480px) {
        padding: 25px 0px;
    }
`;

export const ToolBarFirstBlock = styled.div`
    flex: 5;
    p {
        font-size: 16px;
        color: gray;
        font-weight: 500;
        opacity: 0.6;
    }
`;

export const ToolBarSecondBlock = styled.div`
    display: flex;
    flex: 3;
    justify-content: space-evenly;
    align-items: center;

    p {
        font-size: 16px;
        color: red;
        font-weight: 500;
        opacity: 0.6;
        padding-left: 12px;
        padding-right: 12px;
    }
`;

export const OrderByName = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;

export const Toggle = styled.label.attrs({
    htmlFor: 'sorter',
})`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 0, 0, 0.2);
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: red;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;
