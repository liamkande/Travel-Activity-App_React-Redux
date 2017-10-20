import { PropTypes } from 'react'
import Autocomplete from './Autocomplete'
import '../../stylesheets/AddDayForm.scss'

const AddDayForm = ({ suggestions=[], onNewDay=f=>f, onChange=f=>f, onClear=f=>f, fetching=false, router}) => {

    let _city, _date, _hotel, _airbnb

    const submit = e => {
        e.preventDefault()
        onNewDay({
            city: _city.value,
            date: _date.value.toString(),
            hotel: _hotel.checked,
            airbnb: _airbnb.checked
        })


        const addAnother = confirm(`${_city.value} on ${_date.value.toString()} added. Add another?`)

        if (!addAnother) {
            router.push('/')
        }

        _city.value = ''
        _date.value = ''
        _hotel.checked = false
        _airbnb.checked = false

    }

    return (
        <form onSubmit={submit} className="add-day">

            <label htmlFor="date">City Name</label>

            <Autocomplete ref={input => _city = input}
                          suggestions={suggestions}
                          onChange={() => onChange(_city.value)}
                          fetching={fetching}
                          onClear={onClear}
            />

            <label htmlFor="date">Date</label>
            <input id="date"
                   type="date"
                   ref={input => _date = input}
                   required/>

            <div>
                <input id="hotel-day"
                       ref={input => _hotel = input}
                       type="checkbox"/>
                <label htmlFor="hotel-day">Hotel</label>
            </div>

            <div>
                <input id="airbnb-day"
                       ref={input => _airbnb = input}
                       type="checkbox"/>
                <label htmlFor="airbnb-day">Airbnb</label>
            </div>

            <button>Add Day</button>

        </form>
    )
}

AddDayForm.propTypes = {
    suggestions: PropTypes.array,
    onNewDay: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    router: PropTypes.object
}

export default AddDayForm
