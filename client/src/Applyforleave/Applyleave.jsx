import React, { useState } from 'react';
import "./Applyleave.css"
import Navbar from '../components/ui/Navbar';
import moment from "moment";
import DateTimePicker from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';

const Applyleave = () => {
 
  const currentDate = new Date();

  const [reason, setReason] = useState("Regular Leave");
  const [notes, setNotes] = useState('');
  const [Employee, setEmployee] = useState('');
  const [Reporting, setReporting] = useState('');
 
let nowInitial = moment().add(2, 'days');
const nowEnd = nowInitial;

const initEvent = {
  start: nowInitial.toDate(),
  end: nowEnd.toDate(),
};
const [formValues, setFormValues] = useState(initEvent);

const {  start, end } = formValues;

const handlechange=(e)=>{
  setReason(e.target.value);

  if(e.target.value==="Emergency Leave")
{
  setFormValues({
    ...formValues,
    start: moment().toDate(),
    end: moment().toDate(),
  });
}
else
{
  setFormValues({
    ...formValues,
    start:moment().add(2, 'days').toDate(),
    end: moment().add(2, 'days').toDate(),
  });
}
}

const handleStartDateChange = (e) => {
  setFormValues({
    ...formValues,
    start: e,
    end:e,
  });
};

const handleEndDateChange = (e) => {
  setFormValues({
    ...formValues,
    end: e,
  });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (start && end) {
      const differenceInMilliseconds = end.getTime() - start.getTime();
      const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24)+1;

      if(differenceInDays >1)
      {
        alert("Its more than 1 days of leave LOP")
      }
    }
  console.log(reason,notes,Employee,Reporting)
  };

  return (
    <div className="calendar">
       <Navbar />  
    <div className="leave-form-container">
      <h2>Apply for Leave</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="reason">Employee ID:</label>
          <input
            type="text"
            id="Employee ID"
            value={Employee}
            onChange={(e) => setEmployee(e.target.value)}
            required
          />
           <label htmlFor="reason">Reporting To:</label>
          <input
            type="text"
            id="Reporting To"
            value={Reporting}
            onChange={(e) => setReporting(e.target.value)}
            required
          />

          <label htmlFor="reason">Leave Type:</label>
         
      <select value={reason}  onChange={handlechange}>
        <option value="Regular Leave">Regular Leave</option>
        <option value="Emergency Leave">Emergency Leave</option>
      </select>
  
      <div className="form__field">
          <label className="form__label">Start date</label>
          <DateTimePicker
            onChange={handleStartDateChange}
            value={start}
            minDate={start}
            className="form__input"
          />
        </div>
        <div className="form__field">
          <label className="form__label">End date</label>
          <DateTimePicker
            onChange={handleEndDateChange}
            value={end}
            minDate={start}
            className="form__input"
          />
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Reason for Leave:</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Apply for Leave</button>
      </form>
    </div>
    </div>
  );
};

export default Applyleave;