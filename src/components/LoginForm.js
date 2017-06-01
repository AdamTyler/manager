import React, { Component } from 'react'
import { Text } from 'react-native'
import { Card, CardSection, Input, Button, Spinner } from './common'
import { connect } from 'react-redux'
import * as actions from '../actions'

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={this.onEmailChange.bind(this)}
            label="Email"
            placeholder="email@gmail.com"
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            ref={input => this.password = input}
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorStyle}>{this.props.error}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }

  logIn() {
    let { email, password } = this.props
    this.props.loginUser({email, password})
  }

  onEmailChange(text) {
    // if (text.match(/.+\t/)) {
    //   this.refs.password.focus()
    // } else {
      this.props.emailChanged(text)
    // }
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />
    }
    return (
      <Button onPress={this.logIn.bind(this)}>
        Log In
      </Button>
    )
  }
}

const styles = {
  errorStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
}

const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth
  return {
    email,
    password,
    error,
    loading
  }
}


export default connect(mapStateToProps, actions)(LoginForm)
