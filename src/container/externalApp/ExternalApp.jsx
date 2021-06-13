import React, { useState } from 'react';
import AppLink from '../../components/AppLink/AppLink';
import { apps } from '../../utils/apps';
import { mainApps } from '../../utils/mainApp';
import './ExternalApp.css'

 const ExternalApp = () => {

    const [ showApps, setShowApp ] = useState(false)
    
    return (
        <div className="external-app-container">
            <div className="external-app-link">
            {
                mainApps.map((app, index) => {
                    return <AppLink key={index} app={app} />
                })
            }
            </div>
            <div>
                <button onClick={()=>setShowApp(!showApps)} className="show-more-btn">Show more apps</button>
                {
                    showApps && 

                    <div className="external-app-link">
                        {

                        apps.map((app, index) => {
                            return <AppLink key={index} app={app} />
                        })
                        }
                    </div>
                    
                }
            </div>
        </div>
    )
}

export default ExternalApp