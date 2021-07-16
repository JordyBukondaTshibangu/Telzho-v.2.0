import './UserAccount.css';

const UserAccount = ({handleCloseUserModal}) => {
    return (
        <div className="overlay" onClick={handleCloseUserModal}>
            <div className = "user-account-modal">
                <div className="user-account-profile">
                    <img src="https://cdn0.iconfinder.com/data/icons/thin-users-people/57/thin-191_user_profile_avatar-512.png" alt="/" />
                </div>
                <div className="user-actions">
                    <ul>
                        <li> <a href="/"> <img src="https://cdn0.iconfinder.com/data/icons/web-icons-22/32/external-512.png" alt="" /> New tab</a></li>
                        <li> <a href="/"> <img src="https://img.icons8.com/ios/452/new-window.png" alt="" /> New window</a></li>
                        <li> <a href="/"> <img src="https://www.pngkit.com/png/detail/508-5088916_png-file-svg-history-icon-vector-png.png" alt="" /> history </a></li>
                        <li> <a href="/"> <img src="https://cpng.pikpng.com/pngl/s/577-5779326_icon-bookmark-transparent-bookmark-icon-png-clipart.png" alt="" /> Bookmarks </a></li>
                        <li> <a href="/"> <img src="https://w7.pngwing.com/pngs/308/74/png-transparent-computer-icons-setting-icon-cdr-svg-setting-icon.png" alt="" /> Setting </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserAccount
