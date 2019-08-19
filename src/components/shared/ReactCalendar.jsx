import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import { Calendar, momentLocalizer } from 'react-big-calendar';

const localizer = momentLocalizer(moment);

class ReactCalendar extends Component {

  render() {
    const { height, events, onEventClick } = this.props;

    return events && (
      <div style={{height: height}}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={onEventClick}
        />
      </div>
    );
  }
}

export default ReactCalendar;
