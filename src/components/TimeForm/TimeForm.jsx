import React, { Component } from 'react'
import {connect} from "react-redux"
import './TimeForm.css'

let today = ''
let tomorrow = ''

class TimeForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            outDate: '',
            outTime: '',
            returnDate: '',
            returnTime: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.getToday = this.getToday.bind(this)
        this.getTomorrow = this.getTomorrow.bind(this)
    }

    componentWillMount(){
        this.getToday()
        this.getTomorrow()
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
        this.props.updateTime(e.target.name,e.target.value)
    }

    getToday = () => {
        today = new Date()
        let dd = today.getDate()
        let mm = today.getMonth()+1
        let yyyy = today.getFullYear()

        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        today = yyyy + '-' + mm + '-' + dd
        this.setState({
            outDate: today
        })
    }

    getTomorrow = () => {
        let day = new Date()
        tomorrow = new Date(day)
        tomorrow.setDate(day.getDate()+1)
        let dd = tomorrow.getDate()
        let mm = tomorrow.getMonth()+1

        let yyyy = tomorrow.getFullYear()

        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        tomorrow = yyyy + '-' + mm + '-' + dd
        this.setState({
            returnDate: tomorrow
        })
    }

    render() {

        return (
            <div className="row time-container">
                <div className="col-3 sent-out">
                    <h3><strong>Out</strong></h3>
                    <input
                        type="date"
                        name="outDate"
                        className="form-control form-control-sm"
                        onChange={this.handleChange}
                        defaultValue={today}
                    /><br />
                    <input
                        type="time"
                        name="outTime"
                        className="form-control form-control-sm"
                        onChange={this.handleChange}
                        defaultValue="16:00:00"
                    />
                </div>
                <div className="col-3 due-in">
                    <h3><strong>In</strong></h3>
                    <input
                        type="date"
                        name="returnDate"
                        className="form-control form-control-sm"
                        onChange={this.handleChange}
                        defaultValue={tomorrow}
                    /><br />
                    <input
                        type="time"
                        name="returnTime"
                        className="form-control form-control-sm"
                        onChange={this.handleChange}
                        defaultValue="16:00:00"
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateTime:(property,value) => {
            const action = {type: 'SET_TIME', property, value}
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(TimeForm)