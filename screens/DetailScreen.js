import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ListPharmacieContainer from "../containers/ListPharmacieContainer";


class DetailScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <ListPharmacieContainer navigate={navigate}/>
            </View>
        );
    }
}

export default DetailScreen;