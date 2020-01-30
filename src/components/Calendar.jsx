import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import moment from "moment";
//import "react-datepicker/dist/react-datepicker-cssmodules.css";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partySize: 1,
      date: moment(new Date())
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChangeDate(date) {
    this.setState({ date: date });
  }

  handleSubmit(event) {
    alert("Fetching a table for: " + this.state.partySize);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Make a reservation</h1>
          <label>
            Party size:
            <select
              name="partySize"
              value={this.state.partySize}
              onChange={this.handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </label>

          <br />
          <label>Date:</label>
          <DatePicker
            selected={this.state.date}
            onChange={this.handleChangeDate}
          />
          <br />

          <label>
            Time:
            <select
              name="time"
              value={this.state.time}
              onChange={this.handleChange}
            >
              <option value="9:00 AM">9:00 AM</option>
              <option value="9:30 AM">9:30 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="10:30 AM">10:30 AM</option>
              <option value="9:00 AM">11:00 AM</option>
              <option value="9:30 AM">11:30 AM</option>
              <option value="10:00 AM">12:00 PM</option>
              <option value="10:30 AM">12:30 PM</option>
              <option value="10:00 AM">1:00 PM</option>
              <option value="10:30 AM">1:30 PM</option>
              <option value="10:00 AM">2:00 PM</option>
              <option value="10:30 AM">2:30 PM</option>
              <option value="10:00 AM">3:00 PM</option>
              <option value="10:30 AM">3:30 PM</option>
              <option value="10:00 AM">4:00 PM</option>
              <option value="10:30 AM">4:30 PM</option>
              <option value="10:00 AM">5:00 PM</option>
              <option value="10:30 AM">5:30 PM</option>
              <option value="10:00 AM">6:00 PM</option>
              <option value="10:30 AM">6:30 PM</option>
              <option value="10:00 AM">7:00 PM</option>
              <option value="10:30 AM">7:30 PM</option>
              <option value="10:00 AM">8:00 PM</option>
              <option value="10:30 AM">8:30 PM</option>
              <option value="10:00 AM">9:00 PM</option>
              <option value="10:30 AM">9:30 PM</option>
              <option value="10:00 AM">10:00 PM</option>
              <option value="10:30 AM">10:30 PM</option>
              <option value="10:00 AM">11:00 PM</option>
              <option value="10:30 AM">11:30 PM</option>
            </select>
          </label>
          <br />

          <input type="submit" value="Find a Table" />
        </form>
      </div>
    );
  }
}

export default Calendar;