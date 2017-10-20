import '../stylesheet/ui.scss'
import Plane from 'react-icons/lib/md/airplanemode-active'
import Bed from 'react-icons/lib/fa/bed'
import Calendar from 'react-icons/lib/fa/calendar'
import Hotel from 'react-icons/lib/md/location-city'
import { PropTypes } from 'react'


const percentToDecimal = (decimal) => {
    return ((decimal * 100)+ '%')
}
const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

export const TravelDayCount = ({total=50, hotel=10,
                                airbnb=15, goal=100}) => (
    <div className= "travel-day-count">
      <div className="total-days">
        <span>{total}</span>
        <Calendar />
        <span>Travel days</span>
      </div>
      <div className="hotel-days">
        <span>{hotel}</span>
        <Hotel />
        <span>Hotel stays</span>
      </div>
      <div className="airbnb-days">
        <span>{airbnb}</span>
        <Bed />
        <span>Airbnb stays</span>
      </div>
      <div>
        <span>
          {calcGoalProgress(
            total,
            goal
          )}
        </span>
        <Plane />
      </div>
    </div>
)
TravelDayCount.propTypes = {
  total: PropTypes.number,
  hotel: PropTypes.number,
  airbnb: PropTypes.number,
  goal: PropTypes.number
}

/*
TravelDayCount.defaultProps = {
  total: 70,
  hotel: 30,
  airbnb: 20,
  goal: 70
}
*/
