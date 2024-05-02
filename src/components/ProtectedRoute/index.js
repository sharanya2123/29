// Write your JS code here
import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookies'

const ProtectedRouter = props => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/Login" />
  }
  return <Route {...props} />
}
export default ProtectedRouter
