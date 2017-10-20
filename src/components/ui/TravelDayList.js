import { PropTypes } from 'react'
import { Link } from 'react-router'
import TravelDayRow from './TravelDayRow'
import Bed from 'react-icons/lib/fa/bed'
import Hotel from 'react-icons/lib/md/location-city'
import '../../stylesheets/SkiDayList.scss'

const TravelDayList = ({ days, filter, onRemoveDay=f=>f }) => {

    const filteredDays = (!filter || !filter.match(/hotel|airbnb/)) ?
        days :
        days.filter(day => day[filter])

    const activeFilterStyle = {
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <div className="ski-day-list">
            <table>
                <caption>double click to remove</caption>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>City</th>
                    <th><Hotel /></th>
                    <th><Bed /></th>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <Link to="/list-days" style={(!filter) ? activeFilterStyle : null}>All Days</Link>
                        <Link to="/list-days/hotel" activeStyle={activeFilterStyle}>Hotel Days</Link>
                        <Link to="/list-days/airbnb" activeStyle={activeFilterStyle}>Airbnb Days</Link>
                    </td>
                </tr>
                </thead>
                <tbody>
                {filteredDays.map((day, i) =>
                    <TravelDayRow key={i} {...day} onRemoveDay={onRemoveDay} />
                )}
                </tbody>
            </table>
        </div>
    )
}

TravelDayList.propTypes = {
    filter: PropTypes.oneOf(['hotel', 'airbnb']),
    onRemoveDay: PropTypes.func,
    days: (props) => (!Array.isArray(props.days)) ?
        new Error("TravelDayList days property must be an array") :
        (!props.days.length) ?
            new Error("TravelDayList days array must contain at least one record") :
            null
}

export default TravelDayList
