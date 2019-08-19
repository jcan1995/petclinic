import React, { Component } from 'react';

import { MODAL_TYPES } from '../resources/constants';

import ReactCalendar from './shared/ReactCalendar';
import ModalContainer from './modals/ModalContainer';

class Appointments extends Component {

  state = { currentEvent: null }

  gatherEvents() {

    const { appointments } = this.props;
    let events;

    events = appointments.map((appointment) => {
      return appointment.event;
    });

    return events;
  }

  calendarClickEventHandler = (calendarEvent) => {
    const { appointments } = this.props;
    const { VIEW_ENTITY_EVENT } = MODAL_TYPES;
    let appointment;
    
    appointments.map((appt) => {
      if (appt.event === calendarEvent) {
        appointment = appt;
      }
    });

    this.setState({ currentEvent: calendarEvent }, () => {
        this.props.setModal({isOpen: true, type: VIEW_ENTITY_EVENT, items: appointment });
    });
  }

  renderCalendar() {
    const { appointments } = this.props;
    const events = appointments && this.gatherEvents();

    return (
      <ReactCalendar
        height={"90vh"}
        events={events}
        onEventClick={this.calendarClickEventHandler}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderCalendar()}
      </div>
    );
  }

}

export default Appointments;
