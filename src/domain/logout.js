//@flow
import * as firebase from 'firebase';

export const logout = () => {
    return firebase.auth().signOut();
};
