import React, {useState} from 'react'
const moment = require('moment')


function DateInput(props) {
  const today = new Date();
  const dayLimit = moment(today).format("YYYY-MM-DD")
  return (
    <input type="date" value={props.date} onChange={e => props.setDate(e.currentTarget.value)} min={'2020-01-20'} max={dayLimit}></input>
  )
}

export default DateInput;