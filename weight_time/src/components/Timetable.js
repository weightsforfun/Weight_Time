import { Component } from "react";
import Timetable from "react-timetable-events";

class Appi extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      timetableProps: {
        events: {
          monday: this.props.monday,
          tuesday: this.props.tuesday,
          wednesday: this.props.wednesday,
          thursday: this.props.thursday,
          friday: this.props.friday,
          saturday: this.props.saturday,
          sunday: this.props.sunday,
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
                  background: "#000",
                  borderRadius: "50px",
                }}
              >
                <span className={styles.event_info}>[ {event.name} ]</span>
                <span className={styles.event_info}>
                  {event.startTime.format("HH:mm")} -{" "}
                  {event.endTime.format("HH:mm")}
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
