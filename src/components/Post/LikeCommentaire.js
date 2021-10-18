import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const LikeCommentaire = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const uid = useContext(UidContext);

  /*useEffect(() => {
    if (post.likers.includes(uid)) setLiked(true);
  }, [uid, post.likers, liked]); */
  return (
    <div className="edit-comment">
      {uid === null && (
        <Popup
          trigger={<img src="./img/icons/like-icon.png" alt="like" />}
          position={["bottom center", "bottom right", "bottom left"]}
          closeOnDocumentClick
        >
          <div>Connectez-vous pour aimer un post</div>
        </Popup>
      )}
      {uid && liked === false && (
        <img src="./img/icons/like-icon.png" alt="like" /*onClick={/*like}*/ />
      )}
      {uid && liked && (
        <img src="./img/icons/heart-filled.svg" alt="like" /*onClick={unlike}*/ />
      )}
      <span>{post.likers.length}</span>
    </div>
  );
};
export default LikeCommentaire;
