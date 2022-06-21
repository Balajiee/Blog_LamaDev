import "./Single.css"
import SideBar from "../../components/sideBar/SideBar"
import SinglePost from "../../components/SinglePost/SinglePost"

export default function Single() {
  return (
    <div className="Single">
        <SinglePost></SinglePost>
        <SideBar></SideBar>
        </div>
  )
}
