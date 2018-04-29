import React, { Component } from 'react'
import './Time.css'

let today = ''
let tomorrow = ''

class Time extends Component {
    constructor(props) {
        super(props)
        this.state={
            out: '',
            outTime: '',
            return: '',
            returnTime: ''
        }

        this.getToday = this.getToday.bind(this)
        this.getTomorrow = this.getTomorrow.bind(this)
    }

    componentWillMount(){
        this.getToday()
        this.getTomorrow()
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
            out: today
        })
    }

    getTomorrow = () => {
        tomorrow = new Date()
        let dd = tomorrow.getDate()+1
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
            return: tomorrow
        })
    }

    render() {

        return (
            <div className="row time-container">
                <div className="col-3 sent-out">
                    <h3><strong>Out</strong></h3>
                    <input
                        type="date"
                        defaultValue={today}
                    /><br />
                    <input
                        type="time"
                        defaultValue="16:00:00"
                    />
                </div>
                <div className="col-3 due-in">
                    <h3><strong>In</strong></h3>
                    <input
                        type="date"
                        defaultValue={tomorrow}
                    /><br />
                    <input
                        type="time"
                        defaultValue="16:00:00"
                    />
                </div>
            </div>
        )
    }
}

export default Time