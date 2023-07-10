import React from 'react'

const UserCard = (props) => {
    console.log(props.userData);
  return (
    <div className='col-lg-3'>
        <div className="card">
          <img className="card-img-top" src={props.userData.picture.large} alt="Card image cap"/>
           <div className="card-body">
             <h5 className="card-title">{props.userData.name.last}</h5>
                <p className="card-text">Email:{props.userData.email}</p>
               <a href="#" className="btn btn-primary">Call:{props.userData.phone}</a>
           </div>
         </div>       
    </div>
  )
}

export default UserCard