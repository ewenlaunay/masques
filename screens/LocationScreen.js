import React, {Component} from 'react';
import {SearchBar} from "react-native-elements";
import {View} from 'react-native'



class LocationScreen extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({search});
    };

    render() {
        const {search} = this.state;

        return (
            <View style={{marginTop: 35}}>
                <SearchBar
                    placeholder="Rechercher"
                    onChangeText={this.updateSearch}
                    value={search}
                />

            </View>
        );
    }
}

export default LocationScreen;