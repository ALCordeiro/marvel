/* eslint-disable function-paren-newline */
import React from 'react';

import { useDispatch } from 'react-redux';
import {
    ToolBarContainer,
    ToolBarFirstBlock,
    ToolBarSecondBlock,
    OrderByName,
    Toggle,
} from './ToolBar.style';
import {
    ICharacterMap,
    ICharacters2,
} from '../../interfaces/characters.interface';
import { sortCharactersRequest } from '../../store/ducks/characters/actions';

export const ToolBarComponent: React.FC<ICharacters2> = ({
    characters,
}: ICharacters2) => {
    const dispatch = useDispatch();

    function handleSort(checked: boolean) {
        if (checked) {
            const arrSortDescending = characters.sort(
                (a: ICharacterMap, b: ICharacterMap) =>
                    b.name.normalize().localeCompare(a.name.normalize()),
            );
            dispatch(sortCharactersRequest(arrSortDescending));
        } else {
            const arrSortAscending = characters.sort(
                (a: ICharacterMap, b: ICharacterMap) =>
                    a.name.normalize().localeCompare(b.name.normalize()),
            );
            dispatch(sortCharactersRequest(arrSortAscending));
        }
    }

    return (
        <ToolBarContainer>
            <ToolBarFirstBlock>
                <p>Encontrado(s) {characters.length} herói(s)</p>
            </ToolBarFirstBlock>
            <ToolBarSecondBlock>
                <OrderByName>
                    <img
                        src={`${window.location.origin}/assets/super-hero.svg`}
                        alt="marvel-super-hero"
                    />
                    <p>Ordenar por nome - A/Z</p>
                    <Toggle>
                        <input
                            type="checkbox"
                            id="sorter"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ): void => handleSort(e.target.checked)}
                        />
                        <span className="slider round" />
                    </Toggle>
                </OrderByName>
            </ToolBarSecondBlock>
        </ToolBarContainer>
    );
};

export default ToolBarComponent;
