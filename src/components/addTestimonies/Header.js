import PropTypes from 'prop-types'
import Button  from './Button'
import './addtestimony.scss'




const Header = ({title , onAdd, showAdd}) => {

  return (
    <header className='header'>
        <h1>Share your comments below</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick={onAdd} />
    </header>
  )
}
Header.defaultProps = {
    title : 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string,
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
