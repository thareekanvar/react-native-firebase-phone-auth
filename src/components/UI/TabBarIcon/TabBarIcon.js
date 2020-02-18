// @flow
//External libraries
import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    name: string,
    style?: StyleSheet.Styles,
    color: string
};
const TabBarIcon = (props: Props) => {
    return (
        <Ionicons
            name={props.name}
            size={26}
            style={[{ marginBottom: -3 }, props.style]}
            color={props.color}
            testID="icon"
        />
    );
};

export default TabBarIcon;
