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
  				date: "2016-07-17",
  				hotel: true,
  				airbnb: false
  			}
  		]
    }
    this.addDay = this.addDay.bind(this)
  }
  addDay(newDay){
    this.setState({
      allTravelDays: [
        ...this.state.allTravelDays,
        newDay
      ]
    })
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
        <AddDayForm  onNewDay={this.addDay}/> :
        <TravelDayList  days={this.state.allTravelDays}
                        filter={this.props.params.filter}/>
    }
			</div>
		)
	}
}
