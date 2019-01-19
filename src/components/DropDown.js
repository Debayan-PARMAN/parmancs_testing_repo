import React, { Component } from 'react';
import {Picker } from 'react-native';

export default class Drop_Down extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            options: [
                {
                    attributePk: 0,
                    attributeValue: "",
                    displayValue: "Select Option"
                },
                {
                    attributePk: 1,
                    attributeValue: "O",
                    displayValue: "O"
                },
                {
                    attributePk: 2,
                    attributeValue: "O+",
                    displayValue: "O+"
                },
                {
                    attributePk: 3,
                    attributeValue: "AB",
                    displayValue: "AB"
                }
            ]
        };
    }
    render() {
        return (
            <Picker
                selectedValue={this.state.selected}
                mode='dropdown'
                onValueChange={(itemValue) => this.setState({ selected: itemValue })}>
                {
                    this.state.options.map(option => <Picker.Item key={option.attributePk} label={option.displayValue} value={option.attributeValue} />)
                }
            </Picker>
        );
    }
}