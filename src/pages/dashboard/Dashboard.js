import React from 'react'
import './Dashboard.css'
import Tabs from '../../components/statisticOne/Tabs'
import Appearance from '../../components/statisticOne/Appearance'
import Zoom from '../../components/statisticOne/Zoom'
import Language from '../../components/statisticOne/Language'
import Download from '../../components/statisticOne/Download'
import TelzoUpdate from '../../components/statisticOne/TelzoUpdate'
import Browsing from '../../components/statisticOne/Browsing'

const Dashboard = ({darkMode}) => {
	return (
		<div className={`setting-main dashboard ${darkMode ? 'dark-mode' : 'light-mode'}`}>
			<div className='tabs bottom-border'>
				<Tabs />
			</div>
			<div className='Appearance bottom-border'>
				<Appearance />
			</div>
			<div className='Zoom bottom-border'>
				<Zoom />
			</div>
			<div className='language bottom-border'>
				<Language />
			</div>
			<div className='download bottom-border'>
				<Download />
			</div>
			<div className='telzzo-update bottom-border'>
				<TelzoUpdate />
			</div>
			<div className='browsing'>
				<Browsing />
			</div>
		</div>
	)
}

export default Dashboard
