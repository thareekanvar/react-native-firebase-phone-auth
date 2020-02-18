// @flow
//External libraries
import React, { type Node } from 'react';
import {
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform,
    StyleSheet
} from 'react-native';

type Props = {
    children: Node,
    onPress?: () => void,
    style?: StyleSheet.Styles
};
const Touchable = (props: Props) => {
    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback
                onPress={props.onPress}
                testID="touch-android"
                style={props.style}
            >
                {props.children}
            </TouchableNativeFeedback>
        );
    }
    return (
        <TouchableOpacity
            onPress={props.onPress}
            testID="touch-ios"
            style={props.style}
        >
            {props.children}
        </TouchableOpacity>
    );
};

export default Touchable;
