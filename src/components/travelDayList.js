import Plane from 'react-icons/lib/md/airplanemode-active'
import Bed from 'react-icons/lib/fa/bed'
import Calendar from 'react-icons/lib/fa/calendar'
import Hotel from 'react-icons/lib/md/location-city'
import { TravelDayRow } from './travelDayRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const TravelDayList = ({days, filter}) => {
  const filteredDays = (!filter ||
    !filter.match(/hotel|airbnb/)) ?
    days:
    days.filter(day => day[filter])

  return (
    <div className="travel-day-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>City</th>
            <th>Hotel</th>
            <th>Airbnb</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <Link to="/list-days">
                All Days
              </Link>
              <Link to="/list-days/hotel">
                Hotel Stays
              </Link>
              <Link to="/list-days/airbnb">
                Airbnb Stays
              </Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredDays.map((day, i) =>
            <TravelDayRow key={i}
                          {...day} />
          )}
        </tbody>
      </table>
    </div>
  )
}
TravelDayList.propTypes = {
  days: function(props) {
    if(!Array.isArray(props.days)) {
      return new Error(
        "TravelDayList should be an array"
      )
    } else if(!props.days.length) {
      return new Error(
        "TravelDayList must have at least one record"
      )
    } else {
      return null
    }
  }
}
