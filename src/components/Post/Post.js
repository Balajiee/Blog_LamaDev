import './Post.css'

export default function Post() {
  return (
    <div className="post">
    <img
        className="postImg"
        src='alyn.jpeg'
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
        Life is one grand, sweet song so start the music
        </span>
        <hr />
        <span className="postDate">1 Hour Ago</span>
      </div>
      <p className="postDesc">
      Trust your beauty to shine from your eyes and into the souls of that deserve you.” <br />
“When you walk into a room, you have the grace and gravitas of an empress, and I swear, even the Deities must pause to look at you.” <br />
“She is the most beautiful pattern of beauty on the fabric of love”<br />
Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. <br />
Let us always meet each other with smile, for the smile is the beginning of love. <br />
Love is friendship that has caught fire. It is quiet understanding, mutual confidence, sharing and forgiving. It is loyalty through good and bad times. It settles for less than perfection and makes allowances for human weaknesses.
      </p>
    </div>
  )
}
