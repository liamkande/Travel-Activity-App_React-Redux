import Plane from 'react-icons/lib/md/airplanemode-active'
import Bed from 'react-icons/lib/fa/bed'
import Calendar from 'react-icons/lib/fa/calendar'
import Hotel from 'react-icons/lib/md/location-city'
import { TravelDayRow } from './travelDayRow'
import { PropTypes } from 'react'

export const TravelDayList = ({days}) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>City</th>
        <th>Hotel</th>
        <th>Airbnb</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) =>
        <TravelDayRow key={i}
                      {...day} />
      )}
    </tbody>

  </table>
)
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
