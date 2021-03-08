import React from 'react';
import AppLink from '../../components/AppLink/AppLink';
import { apps } from '../../utils/apps';
import './ExternalApp.css'

 const ExternalApp = (props) => {
    
    return (
        <div className="external-app-container">
            {
                apps.map((app, index) => {
                    return <AppLink key={index} app={app} />
                })
            }
        </div>
    )
}

export default ExternalApp