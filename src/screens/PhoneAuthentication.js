import React, { useState } from 'react';
import { ScrollView, TextInput, Button } from 'react-native';
import { signInWithPhoneNumber } from '../domain/phoneAuthentication';

const PhoneAuthentication = () => {
    const [phone, setPhone] = useState('+919896798997');
    const [smsCode, setSmsCode] = useState('');
    const [confirmSMSCode, setConfirmSMSCode] = useState();

    const handleSendSMS = async () => {
        signInWithPhoneNumber(phone).then(confirmation => {
            setConfirmSMSCode(() => confirmation);
        });
    };

    const handleConfirmSMSCode = () => {
        if (!confirmSMSCode || smsCode === '') {
            return;
        }
        confirmSMSCode(smsCode);
    };

    if (!confirmSMSCode)
        return (
            <ScrollView style={{ padding: 20, marginTop: 20 }}>
                <TextInput
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    placeholder="Your phone"
                />
                <Button onPress={handleSendSMS} title="Next" />
            </ScrollView>
        );
    else
        return (
            <ScrollView style={{ padding: 20, marginTop: 20 }}>
                <TextInput
                    value={smsCode}
                    onChangeText={setSmsCode}
                    keyboardType="numeric"
                    placeholder="Code from SMS"
                />
                <Button
                    onPress={handleConfirmSMSCode}
                    title="Confirm SMS code"
                />
            </ScrollView>
        );
};

export default PhoneAuthentication;
