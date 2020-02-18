// @flow
//External libraries
import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

//Components
import FormErrorText from '../FormErrorText';

//Styles
import { styles } from './TextInput.styles';

type Props = {
    placeholder: string,
    style?: StyleSheet.Styles,
    value: string,
    onChangeText: (value: string) => void,
    secureTextEntry?: boolean,
    keyboardType?: string,
    autoCorrect?: boolean,
    textContentType?: string,
    autoCapitalize?: string,
    error?: ?string
};
const TextInput = (props: Props) => {
    const {
        placeholder,
        style,
        value,
        onChangeText,
        secureTextEntry,
        keyboardType,
        autoCorrect = true,
        textContentType = 'none',
        autoCapitalize = 'sentences',
        error
    } = props;
    return (
        <>
            <NativeTextInput
                style={[styles.container, style, error ? styles.error : {}]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCorrect={autoCorrect}
                textContentType={textContentType}
                autoCapitalize={autoCapitalize}
                testID="text-input"
            />
            {error ? (
                <FormErrorText testID="error">{error}</FormErrorText>
            ) : null}
        </>
    );
};

export default TextInput;
