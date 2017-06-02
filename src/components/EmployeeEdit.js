import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import { employeeUpdate, employeeSave, employeeFire } from '../actions'
import { Card, CardSection, Button, Confirm } from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component {
  state = {
    showModal: false
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onPress={this.onSavePress.bind(this)}>
            Save
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onFirePress.bind(this)}>
            Fire
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAcceptFire.bind(this)}
          onDecline={this.onDeclineFire.bind(this)}
        >
          Are you sure your want to fire {this.props.name}
        </Confirm>
      </Card>
    )
  }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value})
    })
  }

  onSavePress() {
    const { name, phone, shift } = this.props
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
  }

  onFirePress() {
    this.setState({ showModal: !this.state.showModal })
  }

  onAcceptFire() {
    this.props.employeeFire({ uid: this.props.uid })
  }

  onDeclineFire() {
    this.setState({ showModal: false })
  }

  onTextPress() {
    const { phone, shift } = this.props
    Communications.text(phone, `Your upcoming shift is on ${shift}`)
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift, uid} = state.employeeForm
  return {
    name,
    phone,
    shift,
    uid
  }
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeFire})(EmployeeEdit)
