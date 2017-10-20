import { PropTypes } from 'react'
import Bed from 'react-icons/lib/fa/bed'
import Hotel from 'react-icons/lib/md/location-city'

const TravelDayRow = ({ city, date, hotel, airbnb, onRemoveDay=f=>f }) =>
    <tr onDoubleClick={() => onRemoveDay(date)}>
        <td>
            {date}
        </td>
        <td>
            {city}
        </td>
        <td>
            {(hotel) ? <Hotel /> : null }
        </td>
        <td>
            {(airbnb) ? <Bed /> : null }
        </td>
    </tr>

TravelDayRow.propTypes = {
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hotel: PropTypes.bool,
    airbnb: PropTypes.bool,
    onRemoveDay: PropTypes.func
}

export default TravelDayRow
