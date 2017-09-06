import { Link } from 'react-router'
import HomeIcon from 'react-icons/lib/fab/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'

export const Menu = () =>
  <nav className="menu">
    <Link to="/">
      <HomeIcon />
    </Link>
    <Link to="/add-day">
      <AddDayIcon />
    </Link>
    <Link to="/list-days">
      <ListDaysIcon />
    </Link>
  </nav>
