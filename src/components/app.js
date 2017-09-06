import { Component } from 'react'
import { TravelDayList } from './travelDayList'
import { TravelDayCount } from './travelDayCount'
import { AddDayForm } from './addDayForm'
import { Menu } from './menu'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allTravelDays: [
  			{
  				city: "Paris, France",
  				date: new Date("2/12/2017"),
  				hotel: true,
  				airbnb: false
  			},
  			{
  				city: "Milan, Italy",
  				date: new Date("12/07/2016"),
  				hotel: true,
  				airbnb: false
  			},
  			{
  				city: "Miami, Florida",
  				date: new Date("3/16/2017"),
  				hotel: false,
  				airbnb: true
  			}
  		]
    }
  }
  countDays(filter) {
    const { allTravelDays } = this.state
    return allTravelDays.filter(
      (day) => (filter) ? day[filter] : day).length
}
	render() {
		return (
			<div className="app">
      <Menu />
      {(this.props.location.pathname === "/") ?
      <TravelDayCount total={this.countDays()}
                      hotel={this.countDays(
                           "hotel"
                         )}
                      airbnb={this.countDays(
                           "airbnb"
                       )}/> :
       (this.props.location.pathname === "/add-day") ?
        <AddDayForm /> :
        <TravelDayList  days={this.state.allTravelDays}
                        filter={this.props.params.filter}/>
    }
			</div>
		)
	}
}
