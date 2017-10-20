import TravelDayCount from '../ui/TravelDayCount'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
	return {
		total:state.allTravelDays.length,
		hotel: state.allTravelDays.filter(day => day.hotel).length,
		airbnb: state.allTravelDays.filter(day => day.airbnb).length
	}
}

const Container = connect(mapStateToProps) (TravelDayCount)

export default Container

// export default () =>
//	<TravelDayCount total={100} hotel={25} airbnb={10} />
