// @flow
//External libraries
import React, { type Node } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Components
import Touchable from '../../Touchable';

//Styles
import { styles } from './Button.styles';

type Props = {
    title: string,
    style?: StyleSheet.Styles,
    color: string,
    onPress?: () => void,
    icon?: Node,
    disabled?: boolean
};
const Button = (props: Props) => {
    const { disabled } = props;

    const content = (
        <View
            style={[
                styles.container,
                props.style,
                { backgroundColor: props.color },
                disabled ? styles.disabled : {}
            ]}
            testID="container"
        >
            {props.icon}
            <Text style={styles.text} testID="title">
                {props.title}
            </Text>
        </View>
    );
    if (disabled) {
        return content;
    } else {
        return <Touchable onPress={props.onPress}>{content}</Touchable>;
    }
};

export default Button;
