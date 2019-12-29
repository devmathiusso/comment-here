import React, { useState, useEffect } from "react";
import ReactTimeAgo from "react-time-ago/tooltip";
import "./App.css";

import firebase from "./firebase";

const useDatabase = endpoint => {
  const [data, setData] = useState({});

  useEffect(() => {
    const ref = firebase.database().ref(endpoint);

    ref.on("value", snapshot => {
      setData(snapshot.val());
    });

    return () => {
      ref.off();
    };
  }, [endpoint]);

  return data;
};

const useDatabasePush = endpoint => {
  const [status, setStatus] = useState("");

  const save = data => {
    const ref = firebase.database().ref(endpoint);

    ref.push(data, err => {
      if (err) {
        setStatus("ERROR");
      } else {
        setStatus("SUCCESS");
      }
    });
  };

  return [status, save];
};

const Comment = ({ key, comment }) => (
  <div>
    <p>
      <b>{comment.user.name}</b> -{" "}
      <small>
        <ReactTimeAgo date={comment.createdAt} />
      </small>
    </p>
    <p>{comment.content}</p>
  </div>
);

const Comments = () => {
  const data = useDatabase("comments");

  if (!data) {
    return <p>There are no comments yet :(</p>;
  }

  const ids = Object.keys(data);

  if (!ids.length) return <p>Loading comments...</p>;

  return ids.map(id => {
    return <Comment key={id} comment={data[id]} />;
  });
};

const NewComment = props => {
  const [, save] = useDatabasePush("comments");
  const [comment, setComment] = useState("");
  const createComment = () => {
    if (comment) {
      save({
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: { id: 1, name: "Mathiusso" }
      });

      setComment("");
    }
  };

  return (
    <div>
      <textarea
        value={comment}
        onChange={evt => setComment(evt.target.value)}
      />
      <button onClick={createComment}>Comment</button>
    </div>
  );
};

function App() {
  return (
    <div>
      <NewComment />
      <Comments />
    </div>
  );
}

export default App;
