import "./Settings.css"
import SideBar from "../../components/sideBar/SideBar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingUpdateTitle">Update your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
              </div>
                <form  className="settingsForm">
                    <label>Profile Picture</label>
        <div className="settingsPP">
                    <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
            </div>
                <label>User Name</label>
                <input type="text" placeholder="balaji" />
                <label>Email</label>
                <input type="email" placeholder="balaji@gmail.com" />
                <label>Password</label>
                <input type="Password"/>
                <button className="settingSubmit">Update</button>

                </form>
            
        </div>
        <SideBar></SideBar>
    </div>
  )
}
