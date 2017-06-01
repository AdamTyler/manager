import React, { Component } from 'react'
import _ from 'lodash'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { ListView } from 'react-native'
import { Card, CardSection } from './common'
import EmployeeItem from './EmployeeItem'
import { fetchEmployees } from '../actions'

class EmployeeList extends Component {
  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }

  renderRow(employee) {
    return <EmployeeItem employee={employee} />
  }

  componentWillMount() {
    this.props.fetchEmployees()
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(employees)
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }
  })
  return {employees}
}

export default connect(mapStateToProps, { fetchEmployees})(EmployeeList)
