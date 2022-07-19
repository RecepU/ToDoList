import React from "react";

function WelcomePage(props){
    return <div><header>
        <h1>Enter Your Name</h1>
        </header><div>
    <input type="text" onKeyDown={props.enterWelcome} onChange={props.handleChange} value={props.name} />
    {/* <button>
    <Link to="/Home" onClick={props.jumpToList}>
      <span>Jump to list</span>
    </Link></button> */}
  </div></div>
}

export default WelcomePage;