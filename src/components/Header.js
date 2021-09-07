import React from 'react';
import './Header.css';


export default ({black}) =>{

return(
    <header className={black ? "black" : ""}>
<div className="header--logo">
    <a href="/">
     <img src="https://blog.trabajos.com/wp-content/uploads/sites/12/2020/08/netflix-logo.png"/>
</a>
</div>
<div className="header--user">
    <a href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuario"></img>
    </a>



</div>

    </header>

);


}