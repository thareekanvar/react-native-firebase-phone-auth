import { StyleSheet } from 'react-native';
import Layout from '../../../../constants/Layout';

export const styles = StyleSheet.create({
    container: {
        width: Layout.window.width - 20,
        padding: 15,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18,
        paddingTop: 2
    },
    icon: {
        marginRight: 15
    },
    disabled: {
        opacity: 0.5
    }
});
