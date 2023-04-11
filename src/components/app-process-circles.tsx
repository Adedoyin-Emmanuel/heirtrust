import React from 'react'

interface aboutProcessProps
{
    imageSrc?:string;
    className:string;
}
 
const AppAboutProcess = ({imageSrc, className}: aboutProcessProps):JSX.Element =>
{
    return (
        <React.Fragment>
            <section className={`process-circle  ${className}`}>
                <img src={imageSrc} alt="onboarding-process" width={"40"} height={"40"} className="p-1 " />
            </section>
        </React.Fragment>
    );
}


export default AppAboutProcess;