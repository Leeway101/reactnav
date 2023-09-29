import React, { Component } from "react";
import { Link } from "react-router-dom";

export class PostCard extends Component {
  render() {
    const { id, title, body } = this.props;
    return (
      <div>
        <Link to={`/posts/${id}`}>
          {id}.{title}
        </Link>
        <p>{body}</p>
      </div>
    );
  }
}

export default PostCard;
