import Plane from 'react-icons/lib/md/airplanemode-active'
import Bed from 'react-icons/lib/fa/bed'
import Calendar from 'react-icons/lib/fa/calendar'
import Hotel from 'react-icons/lib/md/location-city'
import { PropTypes } from 'react'

export const TravelDayRow = ({city, date,
                              hotel, airbnb}) => (

    <tr>
      <td>
        {date.getMonth()+1}/{date.getDate()}/
        {date.getFullYear()}
      </td>
      <td>
        {city}
      </td>
      <td>
        {(hotel) ? <Hotel /> : null }
      </td>
      <td>
        {(airbnb) ? <Bed /> : null}
      </td>
    </tr>
  )

  TravelDayRow.propTypes = {
    city: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    hotel: PropTypes.bool,
    airbnb: PropTypes.bool
  }
