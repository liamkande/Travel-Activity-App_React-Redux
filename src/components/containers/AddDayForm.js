import AddDayForm from '../ui/AddDayForm'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addDay, suggestCityNames, clearSuggestions } from '../../actions'

const mapStateToProps = (state, props) =>
({
  suggestions: state.cityNames.suggestions,
  fetching: state.cityNames.fetching,
  router: props.router
})

const mapDispatchToprops = dispatch =>
({
  onNewDay({city, date, hotel, airbnb}) {
    dispatch(
      addDay(city, date, hotel, airbnb)
    )
  },
  onChange(value) {
    if (value) {
      dispatch(
        suggestCityNames(value)
      )
    } else {
      dispatch(
        clearSuggestions()
      )
    }
  },
  onClear() {
    dispatch(
      clearSuggestions()
    )
  }
})

const Container = connect(mapStateToProps, mapDispatchToprops) (AddDayForm)

export default withRouter(Container)

/* export default withRouter(
   (props) =>
        <AddDayForm suggestions={[]}
                fetching={false}
                router={props.router}
                onNewDay={day => console.log('todo: add day', day)}
                onChange={value => console.log('todo: suggest', value)}
                onClear={() => console.log('todo: clear suggestions')} />
)
*/
