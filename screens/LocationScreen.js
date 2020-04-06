import React, {Component} from 'react';
import {SearchBar} from "react-native-elements";


class LocationScreen extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <SearchBar
                placeholder="Rechercher"
                onChangeText={this.updateSearch}
                value={search}
            />
        );
    }
}

export default LocationScreen;