import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sideBar/SideBar'
import './Home.css'

export default function Home() {
  return (
    <>
        <Header></Header>
    <div className="home">
      <Posts></Posts>
      <SideBar></SideBar>
    </div>
    </>
  )
}
