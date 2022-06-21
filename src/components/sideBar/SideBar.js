import'./SideBar.css'

export default function SideBar() {
  return (
    <div className="SideBar">
        <div className="sideBarItem">
            <span className="sideBarTitle">ABOUT ME</span>
            <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
        Since March 8, 1990, Woman’s Day is being observed by SAARC (South Asian Association for Regional Cooperation) consisting of seven countries, namely, India, Sri Lanka, and the Maldives.
        </p>
        </div>
    <div className="sideBarItem">
        <span className='sideBarTitle'>CATEGORIES</span>
        <ul className="sideBarList">
            <li className='sideBarListItem'>Life</li>
            <li className='sideBarListItem'>Cricket</li>
            <li className='sideBarListItem'>Chess</li>
            <li className='sideBarListItem'>Carrom Board</li>
            <li className='sideBarListItem'>Hockey</li>
            <li className='sideBarListItem'>FootBall</li>
        </ul>
    </div>
    <div className="sideBarItem">
    <span className='sideBarTitle'>FOLLOW US</span>
    <div className="sideBarSocial">
        <i className="SideBarIcon fa-brands fa-facebook"></i>
        <i className="SideBarIcon fa-brands fa-twitter"></i>
        <i className="SideBarIcon fa-brands fa-instagram-square"></i>
        <i className="SideBarIcon fa-brands fa-pinterest"></i>
    </div>
    </div>
    </div>
  )
}
