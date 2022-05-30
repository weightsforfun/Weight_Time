import { Component } from "react";
import Timetable from "react-timetable-events";

class Appi extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      timetableProps: {
        events: {
          mon: this.props.monday,
          tue: this.props.tuesday,
          wed: this.props.wednesday,
          thu: this.props.thursday,
          fri: this.props.friday,
          sat: this.props.saturday,
          sun: this.props.sunday,
        },
        hoursInterval: [6, 24],
        timeLabel: "Time :)",
        renderHour(hour, defaultAttributes, styles) {
          return (
            <div
              {...defaultAttributes}
              key={hour}
              style={{
                ...defaultAttributes.style,
                textAlign: "center",
                textDecoration: "underline",
                background: "rgba(100,100,100,0)",
                color: "black",
              }}
            >
              {hour}
            </div>
          );
        },
        renderEvent(event, defaultAttributes, styles) {
          return (
            <div>
              <div
                {...defaultAttributes}
                title={event.name}
                key={event.id}
                style={{
                  ...defaultAttributes.style,
                  background: "rgba(100,100,100,0)",
                  borderRadius: "0px",
                  color: "black",
                }}
              >
                <span className={styles.event_info}>[ {event.name} ]</span>
                <span className={styles.event_info}>
                  {event.startTime.format("HH")} - {event.endTime.format("HH")}
                </span>
              </div>
            </div>
          );
        },
      },
    };
  }

  render() {
    return <Timetable {...this.state.timetableProps} />;
  }
}

export default Appi;
