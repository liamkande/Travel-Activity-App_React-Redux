import { PropTypes } from 'react'
import Hotel from 'react-icons/lib/md/location-city'
import Bed from 'react-icons/lib/fa/bed'
import Calendar from 'react-icons/lib/fa/calendar'
import '../../stylesheets/SkiDayCount.scss'

const TravelDayCount = ({ total=0, hotel=0, airbnb=0 }) =>
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
            <Calendar />
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{hotel}</span>
            <Hotel />
            <span>Hotel</span>
        </div>
        <div className="backcountry-days">
            <span>{airbnb}</span>
            <Bed />
            <span>Airbnb</span>
        </div>
    </div>

TravelDayCount.propTypes = {
    total: PropTypes.number,
    hotel: PropTypes.number,
    airbnb: PropTypes.number
}

export default TravelDayCount
