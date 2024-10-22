import React from "react";

const UserProfile= ({names, age, zip}) =>{
    return(
        <div>
            <h2> User Profile </h2>
            <p>Name: {names}</p>
            <p>Age: {age}</p>
            <p>Zip: {zip}</p>
        </div>
    );
};
   
export default UserProfile;