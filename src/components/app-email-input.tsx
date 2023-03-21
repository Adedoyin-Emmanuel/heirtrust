import React from 'react'

const AppEmailInput = ():JSX.Element =>
{
    return(
        <React.Fragment>
            <input type="email" name="appEmail" placeholder="Enter your email here" className=""/>
        </React.Fragment>
    );
        
}


export default AppEmailInput;