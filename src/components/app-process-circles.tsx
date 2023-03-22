import React from 'react'

interface aboutProcessProps
{
    text:string;
    className:string;
}
 
const AppAboutProcess = ({text, className}: aboutProcessProps):JSX.Element =>
{
    return (
        <React.Fragment>
            <section className={`process-circle d-flex align-items-center justify-content-center ${className}`}>
                <h2 className="fw-bold text-center m-auto">{text}</h2>
            </section>
        </React.Fragment>
    );
}


export default AppAboutProcess;