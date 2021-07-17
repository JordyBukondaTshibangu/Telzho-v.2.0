import React, {useState} from 'react';
import AppLink from '../../components/appLink/AppLink';
import {apps} from '../../utils/apps';
import AddSite from '../../components/addSite/AddSite'
import './ExternalApp.css'

const ExternalApp = () => {

    const [showApps, setShowApp] = useState(false);
    const [showModal, setAddApp] = useState(false);

    return (
            <div className="moreExternalApps">

                <div className="button-container">
                    <button 
                        className="show-more-btn"
                        onClick={
                            () => {
                                setShowApp(!showApps);
                                setAddApp(showModal)
                            }
                        }>
                            Show more apps
                    </button>
                    <button 
                        className="add-site-btn"
                        onClick={
                            () => {
                                setAddApp(!showModal);
                                setShowApp(showApps)
                            }
                        }>
                            Add a site
                    </button>
                </div>

                { showModal && <AddSite handleCloseNewAppModal={() => setAddApp(false)}/>}

                {
                    showApps && 
                    <div className="more-apps">
                        {
                            apps.map((app, index) =>  <AppLink key={index} app={app} />)
                        }
                    </div>
                } 
                </div>
    )
}

export default ExternalApp
