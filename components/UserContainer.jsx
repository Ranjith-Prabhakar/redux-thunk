// import { useEffect } from "react"
// import { fetchUsers } from "../redux/features/user/userAction"
// import { connect } from "react-redux"

// const UserContainer = ({userData,fetchUsers}) => {

//   useEffect(()=>{
//     fetchUsers()
//   },[])

//   return  userData.loading ? (<div>Loading...</div>) : userData.error ? (<div>{userData.error}</div>) : (
//     <div>
//       <h2> Users List</h2>
//       <div>
//         {
//           userData && userData.user && userData.user.map(user=>
//             <p>{user.name}</p>
//           )
//         }
//       </div>
//     </div>
//   )
// }

// const mapStateToProps = (state)=>{ 
//   return {
//     userData:state.user
//   }
// }

// const mapDispatchToProps = dispatch=>{ 
//   return {
//     fetchUsers:()=>dispatch(fetchUsers())
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)

import { useEffect } from "react"
import { fetchUsers } from "../redux/features/user/userAction"
import { connect } from "react-redux"

const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers()
  }, [])

  return userData.loading ? (
    <div>Loading...</div>
  ) : userData.error ? (
    <div>{userData.error}</div>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {
          userData && userData.users && userData.users.map(user => // Fixed state access
            <p key={user.id}>{user.name}</p>
          )
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state // Changed state structure access
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
