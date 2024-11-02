import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode, useEffect } from 'react'
import { Notifier, Easing, NotifierComponents, NotifierWrapper } from 'react-native-notifier';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface showNotifProps {
    onPress?: () => void;
    onHidden?: () => void;
    title: string;
    description: string;
    logo?: any,
    duration: number
}

interface showAlertProps {
    onPress?: () => void;
    onHidden?: () => void;
    title: string;
    description: string;
    alertType: string;
    logo?: any,
    duration: number
}

export default function useNotificationApp() {

    const handleOnPress = () => {
        console.log('this is notif default of notification onPress')
    };

    const handleOnHidden = () => {
        console.log('this is default of notification onHidden')
    };

    const showNotif = ({
        onPress,
        onHidden,
        title,
        description,
        logo,
        duration,
    }: showNotifProps) => {

        let logoNotif = require('./assets/image/logo-remove-bg.png');
        if (logo) {
            logoNotif = logo;
        }

        Notifier.showNotification({
            title: title,
            description: description,
            duration: duration? duration : 3 * 1000,
            showAnimationDuration: 800,
            showEasing: Easing.bounce,
            onPress: onPress ? onPress : handleOnPress,
            onHidden: onHidden ? onHidden : handleOnHidden,
            hideOnPress: false,
            Component: NotifierComponents.Notification,
            componentProps: {
                imageSource: logoNotif,
                containerStyle: {
                    marginTop: 50,
                }
            },
        });
    }

    const showAlert = ({
        onPress,
        onHidden,
        title,
        description,
        alertType,
        duration
    }: showAlertProps) => {
        Notifier.showNotification({
            title: title,
            description: description,
            duration: duration? duration : 3 * 1000,
            showAnimationDuration: 800,
            showEasing: Easing.bounce,
            onPress: onPress ? onPress : handleOnPress,
            onHidden: onHidden ? onHidden : handleOnHidden,
            hideOnPress: false,
            Component: NotifierComponents.Alert,
            componentProps: {
                alertType: alertType,
                titleStyle: {
                    marginTop: 20,
                }
            },
        });
    }



    return { showNotif, showAlert }
}

export const NotifWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NotifierWrapper>
                {children}
            </NotifierWrapper>
        </GestureHandlerRootView>
    )
}


const styles = StyleSheet.create({})