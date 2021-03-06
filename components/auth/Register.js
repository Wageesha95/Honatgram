import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

export class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            name: ""
        }

    }
    render() {
        return (
            <View>
                <TextInput
                    placeholder="name"
                    onChangeText={(name) => this.setState({ name: name })}
                />
                <TextInput
                    placeholder="email"
                    onChangeText={(email) => this.setState({ email: email })}
                />
                <TextInput
                    placeholder="password"
                    onChangeText={(password) => this.setState({ password: password })}
                />

                <Button
                    onPress={() => this.onSignUp}
                    title=""
                />
            </View>
        )
    }
}

export default Register
