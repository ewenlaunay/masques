import React, {Component} from 'react';
import {View, Text, FlatList, Image} from 'react-native';

class ItemPharmacie extends Component {

    render() {
        const {pharmacie} = this.props;
        return (
            <View style={{alignItems: 'center'}}>

                <Text style={{fontSize: 20, marginBottom: 20}}>
                    Bienvenue sur la Pharmacie {pharmacie.name}
                </Text>
                <Text style={{fontSize: 15, marginBottom: 20}}>
                    Adresse: {pharmacie.address}
                </Text>
                <Text style={{fontSize: 15, marginBottom: 20}}>
                    Masques disponibles: {pharmacie.mask}
                </Text>

            </View>
        );
    }
}

export default ItemPharmacie;