import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addComment, getPost } from "../../actions/post.actions";
import FollowHandler from "../Profil/FollowHandler";
import { isEmpty, timestampParser } from "../Utils";
import EditDeleteComment from "./EditDeleteComment";

const CardComments = ({ post }) => {
  const [text, setText] = useState("");
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleComment = (e) => {
    e.preventDefault();

    if (text) {
      dispatch(addComment(post._id, userData._id, text, userData.pseudo))
        .then(() => dispatch(getPost()))
        .then(() => setText(""));
    }
  };

  return (
    <div className="comments-container">
      {post.comments.map((comment) => {
        return (
          <div
            className={
              comment.commenterId === userData._id
                ? "comment-container client"
                : "comment-container"
            }
            key={comment._id}
          >
            {/*recuperer pour faire cote profil */}
            <div className="left-part">
              <NavLink exact to="/profil">
                <img
                  src={
                    !isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === comment.commenterId)
                          return user.picture;
                        else return null;
                      })
                      .join("")
                  }
                  alt="commenter-pic"
                />
              </NavLink>
            </div>
            <div className="right-part">
              <div className="comment-header">
                <div className="pseudo">
                 <NavLink exact to="/profil">
                 <h3>{comment.commenterPseudo}</h3>
                 </NavLink>
                  {comment.commenterId !== userData._id && (
                    <FollowHandler
                      idToFollow={comment.commenterId}
                      type={"card"}
                    />
                  )}
                </div>
                <span>{timestampParser(comment.timestamp)}</span>
              </div>
              <p>{comment.text}</p>
              <EditDeleteComment comment={comment} postId={post._id} />
            </div>
          </div>
        );
      })}

      {userData._id && (
        <form action="" onSubmit={handleComment} className="comment-form">
          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="C'est à vous de commenter"
          />
          <br />
          <input type="submit" value="Envoyer" />
        </form>
      )}
    </div>
  );
};

export default CardComments;
