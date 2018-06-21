import React from 'react'


const userHoc = (WrappedComponent, arg1) =>{
  return(props) => (
    <div>
      <WrappedComponent/>
      {arg1}
    </div>
  )
}


export default userHoc;