import {Navigate} from "react-router"
const ProtectedRoute=({children})=>
{
 const isLoggedIn=sessionStorage.getItem('isLoggedIn')==="true" 
 const role=sessionStorage.getItem('role')
 return(
    <div>
       {isLoggedIn?children:<Navigate to='/login_or_reg'/>}
    </div>
 )
}
export default ProtectedRoute