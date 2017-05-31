import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux'
import * as actions from '../actions'

class LoginForm extends Component {
  render() {
    console.log(this.props)
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
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button>
            Log In
          </Button>

        </CardSection>
      </Card>
    )
  }

  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }
}

const mapStateToProps = state => {
  const { email, password } = state.auth
  return {
    email,
    password
  }
}


export default connect(mapStateToProps, actions)(LoginForm)
