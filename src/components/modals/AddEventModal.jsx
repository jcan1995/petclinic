import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import setMinutes from "date-fns/set_minutes";
import setHours from "date-fns/set_hours";
import getDay from "date-fns/get_day";

import 'react-datepicker/dist/react-datepicker.css';

// Todo: separate datepicker into another class
class AddEventModal extends Component {

  state = {
    vet: '',
    pet: '',
    event: null,
    dateSelected: null
  }

  onVetChange = (e) => {
    const { value } = e.target;
    this.setState({vet: value});
  }

  onPetChange = (e) => {
    const { value } = e.target;
    this.setState({pet: value});
  }

  handleChange = (e) => {
    this.setState({dateSelected : e});
  }

  isWeekday = date => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  dateAndTimeAvailable = (startTime) => {
    const { appointments } = this.props;
    for (let i = 0; i < appointments.length; i++) {
      const dateObj = appointments[i].event.start;
      const date = dateObj.getDate();
      const hour = dateObj.getHours();
      const minutes = dateObj.getMinutes();

      if (startTime.getDate() === date) {
        if (startTime.getHours() === hour) {
          if (startTime.getMinutes() === minutes) {
            return false;
          }
        }
      }
    }

    return true;
  }

  onAddAppointmentClick = () => {
    const { vet, pet, dateSelected } = this.state;
    const { appointments, setAppointments, setModal } = this.props;
    const startTime = new Date(dateSelected);
    let endTime = new Date(startTime);

    if (this.dateAndTimeAvailable(startTime)) {
      const startMinutes = startTime.getMinutes();
      const startHours = startTime.getHours();

      if (startMinutes === 0) {

        endTime.setHours(startHours);
        endTime.setMinutes(30);
      } else if (startMinutes === 30) {

        endTime.setHours(startHours + 1);
        endTime.setMinutes(0);
      }

      const appt = {
        vet,
        pet,
        event: {
          title: `${vet} and ${pet}`,
          start: startTime,
          end: endTime
        }
      }

      appointments.push(appt);
      setAppointments(appointments);
      setModal({isOpen: false});
    }

  }

  render() {
    const { pets, vets } = this.props;

    return (
      <div>
        <h5 style={{color: '#fff'}}>Create Appointment</h5>
        <div className="row">
          <div className="col s6">
            <select onChange={this.onVetChange} class="browser-default">
              <option disabled selected>Veterinarian</option>
              {
                vets.map((vet, key) => {
                  const { name } = vet;
                  return (
                      <option value={name}>{name}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="col s6">
            <select onChange={this.onPetChange} class="browser-default">
              <option disabled selected>Pet</option>
              {
                pets.map((pet, key) => {
                  const { name } = pet;
                  return (
                      <option value={name}>{name}</option>
                  )
                })
              }
            </select>
          </div>

        </div>
        <div style={{paddingTop: '8px'}} className="row">
          <div className="col s6">
            <DatePicker
               selected={this.state.dateSelected || new Date()}
               showTimeSelect
               filterDate={this.isWeekday}
               minTime={setHours(setMinutes(new Date(), 0), 8)}
               maxTime={setHours(setMinutes(new Date(), 30), 16)}
               onChange={this.handleChange}
             />
          </div>
          <div className="col s6">
            <a onClick={this.onAddAppointmentClick} class="waves-effect waves-light btn">Add Appointment</a>
          </div>
        </div>

      </div>
    );
  }

}

export default AddEventModal;
