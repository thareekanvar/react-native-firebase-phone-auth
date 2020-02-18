// @flow
//External libraries
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

//Components
import Button from './components/UI/Buttons/Button';
import PhoneAuthentication from './screens/PhoneAuthentication';
import { logout } from './domain/logout';

type Props = {
    skipLoadingScreen: boolean
};
const AppContainer = (props: Props) => {
    const [userAuthenticated, setUserAuthenticated] = useState();
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    const [isAuthenticatingWithPhone, setIsAuthenticatingWithPhone] = useState(
        false
    );

    firebase.auth().onAuthStateChanged(user => {
        setUserAuthenticated(user);
    });

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        );
    } else {
        if (isAuthenticatingWithPhone && !userAuthenticated) {
            return <PhoneAuthentication />;
        }

        return (
            <View style={styles.container}>
                {userAuthenticated ? (
                    <>
                        <Button
                            style={{ marginTop: 5 }}
                            color="green"
                            title="Logout"
                            onPress={logout}
                        />

                        <Text>Made by</Text>
                        <Text>Thareek Anvar</Text>
                        <Text>Contributors</Text>
                        <Text>Alex P. Andrade</Text>
                    </>
                ) : (
                    <>
                        <Button
                            style={{ marginTop: 5 }}
                            color="blue"
                            title="Authenticate with phone number"
                            onPress={() => setIsAuthenticatingWithPhone(true)}
                        />
                        <Text>Made by</Text>
                        <Text>Thareek Anvar</Text>
                        <Text>Contributors</Text>
                        <Text>Alex P. Andrade</Text>
                    </>
                )}
            </View>
        );
    }
};

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([
            require('../assets/images/robot-dev.png'),
            require('../assets/images/robot-prod.png')
        ]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free to
            // remove this if you are not using it in your app
            'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf')
        })
    ]);
}

function handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingLeft: 5
    }
});

export default AppContainer;
