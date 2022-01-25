import React from 'react';
import * as firebase from '@firebase/app'
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { Formik } from 'formik';
import styles from '../Style/Styles.styles';

export default class ContentPage extends React.Component {

    render() {
        return (
            <View style={styles.app}>
                <View style={styles.container}>
                    <Text style={styles.subtitle}>CS 4261 - Programming Assignment 1</Text>
                    <Text style={styles.title}>Cryptocurrency Price Tracker</Text>
                    <Text style={styles.subtitle}>Content Page</Text>
                </View>
            </View>
        )
    }
}