import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { employeeUpdate, employeeSave } from '../actions'
import { Card, CardSection, Button } from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component {
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
          <Button onPress={this.onDeletePress.bind(this)}>
            Delete
          </Button>
        </CardSection>
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

  onDeletePress() {
    const { name, phone, shift } = this.props
    this.props.employeeCreate({name,phone,shift})
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

export default connect(mapStateToProps, {employeeUpdate, employeeSave})(EmployeeEdit)
