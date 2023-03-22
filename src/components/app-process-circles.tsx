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
            <section className={`process-circle ${className}`}>
                <h2 className="fw-bold">{text}</h2>
            </section>
        </React.Fragment>
    );
}


export default AppAboutProcess;