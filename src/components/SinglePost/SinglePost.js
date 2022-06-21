import "./SinglePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
        Before I met you; I didn't think love was for me. 
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Balaji</b></span>
          <span className="singlePostAuthor">1 Hour Ago</span>
        </div>
        <p className="singlePostDesc">
      Listen to me, okay? I’m in love with you. I love you every second of the day. And I’ve never loved anyone as I love you. I cry over you not because I’m in pain but because I feel so blessed that I just can’t hide my emotions. You are on my mind every moment. I’ve never missed anyone as I miss you. You are someone special to me. Please be with me forever and ever. <br />
      <br />

I can only use so many words in the dictionary to show you how much I love you. I love you so much that you are always on my mind, putting a smile on my face and making my heart skip a beat. There are so many ways to express my love, and I plan to show you just how much love I have for you for the rest of my life. I hope that my actions let you know the extent of my affection, adoration, and commitment to you. <br />
<br />

I want you every second of every day from now until the end of forever. I didn’t believe in love, and now I understand that I just spent my time gratuitously. But, being with you has changed my outlook on love and life entirely. I now know true love exists. Because I found it with you. I love you.
        </p>
        </div>

        </div>
  )
}
