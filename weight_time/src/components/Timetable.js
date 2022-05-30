import { Component } from "react";
import Timetable from "react-timetable-events";
import "../timetable.css";

class Appi extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      timetableProps: {
        events: {
          m: this.props.monday,
          t: this.props.tuesday,
          w: this.props.wednesday,
          t: this.props.thursday,
          f: this.props.friday,
          s: this.props.saturday,
          s: this.props.sunday,
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
