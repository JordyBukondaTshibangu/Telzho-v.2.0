import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { FaCog } from 'react-icons/fa'
import Home from './pages/homePage/Home'
import SearchPage from './pages/searchPage/SearchPage'
import UserPage from './pages/userPage/UserprofilePage'
import PrivacyPage from './pages/privacyPage/PrivacyPage'
import DashboardPage from './pages/dashboard/Dashboard'
import SideBar from './components/sidebar/SideBar'
import SwitchModeRouter from './SwitchModeRouter'


const App = () => {
	const [darkMode, setDarkMode] = useState(false)
	const [openModal, setOpenModal] = useState(false)

	return (
		<Router>
			<Switch>
				<div className={darkMode ? 'dark-mode' : 'light-mode'}>
					<div className='container'>
						<div className='home-header'>
							<div className='setting-icon'>
								<FaCog
									className='gear-setting'
									onClick={() => setOpenModal(!openModal)}
								/>
								{openModal &&
									ReactDOM.createPortal(
										<SideBar closeModal={() => setOpenModal(false)} />,
										document.getElementById('app-setting')
									)}
							</div>
							<div className='setting-mode'>
								<span style={{ color: darkMode ? 'grey' : 'yellow' }}>☀︎</span>
								<div className='switch-checkbox'>
									<label className='switch'>
										<input
											type='checkbox'
											onChange={() => setDarkMode(!darkMode)}
										/>
										<span className='slider round'></span>
									</label>
								</div>
								<span style={{ color: darkMode ? '#c96dfd' : 'grey' }}>☽</span>
							</div>
						</div>

						<SwitchModeRouter path='/' exact darkMode={darkMode} component={Home} />
						<SwitchModeRouter path='/search' exact darkMode={darkMode} component={SearchPage} />
						<SwitchModeRouter path='/user-profile' exact darkMode={darkMode} component={UserPage} />
						<SwitchModeRouter path='/privacy' exact darkMode={darkMode} component={PrivacyPage} />
						<SwitchModeRouter path='/dashboard' exact darkMode={darkMode} component={DashboardPage} />
					</div>
				</div>
			</Switch>
		</Router>
	)
}

export default App
