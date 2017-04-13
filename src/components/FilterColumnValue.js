// @flow
import styled from 'styled-components';
import getTheme from './getTheme';

const FilterColumnValue = styled.div`
    color: ${getTheme('value.color')};
    font-size: 0.75em;
    line-height: 1;
    text-decoration: underline;

    ${/* float: left; */ ''}
    margin-right: 18px;
`;

export default FilterColumnValue;