import React, { Component } from 'react';
import {Picker } from 'react-native';

export default class Drop_Down extends Component {
    render() {
        return (
            <Picker
                selectedValue={this.props.selectedValue}
                mode='dropdown'
                onValueChange={(itemValue) => this.props.onValueChange(itemValue, 'bloodGroup')}>
                {
                    this.props.options.map(option => <Picker.Item key={option.attributePk} label={option.displayValue} value={option.attributeValue} />)
                }
            </Picker>
        );
    }
}