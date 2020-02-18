// @flow
//External libraries
import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

//Styles
import { styles } from './FormErrorText.styles';

type Props = {
    children: string,
    style?: StyleSheet.Styles
};
const FormErrorText = (props: Props) => {
    return (
        <NativeText style={[styles.container, props.style]} testID="container">
            {props.children}
        </NativeText>
    );
};

export default FormErrorText;
