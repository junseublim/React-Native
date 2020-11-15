import React from 'react';
import Styled from 'styled-components/native';
import { ButtonProps } from 'react-native';

const StyleButton = Styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    justify-content: center;
    border-radius: 4px;
    align-items:center;
    border: 1px;
    border-color: #333333;
`;

const Label = Styled.Text`
    color: #ffffff;
`;

interface Props {
    label: string;
    style?: Object;
    onPress: () => void;
}

const Button = ({label, style, onPress}: Props) => {
    return (
        <StyleButton style={style} onPress={onPress}>
            <Label>{label}</Label>
        </StyleButton>
    )
}

export default Button;