import { PropTypes, Component } from 'react'

const travelCities = [
  "Bangkok, Thailand",
  "London, UK",
  "Paris, France",
  "Singapore, Rep.Singapore",
  "New York, USA",
  "Istanbul, Turkey",
  "Dubai, UAE",
  "Kuala Lumpur, Malaysia",
  "Hong Kong, China",
  "Barcelona, Spain"
]

class Autocomplete extends Component {
  get value() {
    return this.refs.inputCities.value
  }
  set value(inputValue) {
      this.refs.inputCities.value = inputValue

  }
  render() {
    return (
      <div>
        <input ref="inputCities"
               type="text"
               list="travel-cities" />
        <datalist id="travel-cities">
          {this.props.options.map(
            (opt, i) =>
            <option key={i}>{opt}</option>)}
        </datalist>
      </div>
    )
  }
}


export const AddDayForm = ({ city,
                             date,
                             hotel,
                             airbnb,
                             onNewDay }) => {
  let _city, _date, _hotel, _airbnb
  const submit = (e) => {
      e.preventDefault()
      onNewDay({
        city: _city.value,
        date: _date.value,
        hotel: _hotel.checked,
        airbnb: _airbnb.checked
      })
      _city.value = ''
      _date.value =''
      _hotel.checked = false
      _airbnb.checked = false

  }
      return (
        <form onSubmit={submit} className="add-day-form">

          <label htmlFor="city">City Name</label>
          <Autocomplete options={travelCities}
                 ref= {input => _city = input}/>
          <label htmlFor="date">Date</label>
          <input id="date"
                 type="date"
                 required
                 defaultValue={date}
                 ref="date"
                 ref= {input => _date = input}/>

          <div>
            <input id="hotel"
                   type="checkbox"
                   defaultChecked={hotel}
                   ref="hotel"
                   ref= {input => _hotel = input}/>
            <label htmlFor="hotel">Hotel Stay</label>
          </div>

          <div>
            <input id="airbnb"
                   type="checkbox"
                   defaultChecked={airbnb}
                   ref="airbnb"
                   ref= {input => _airbnb = input}/>
            <label htmlFor="airbnb">AirBnB Stay</label>
          </div>
          <button>Add Day</button>
        </form>
      )
}
AddDayForm.defaultProps = {
  city:"Milan, Italy",
  date:"2016-12-07",
  hotel: false,
  airbnb:true
}

AddDayForm.propTypes = {
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  hotel: PropTypes.bool.isRequired,
  airbnb: PropTypes.bool.isRequired
}
