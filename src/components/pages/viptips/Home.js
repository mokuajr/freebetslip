import React, { useEffect, useState } from "react";
import { withAuthorization } from "../../Session";
import VipLayout from "./VipLayout";
import { db } from "../../Firebase/firebase";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("Viptips")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <VipLayout
          Home={post.Home}
          Vtips={post.Vtips}
          Away={post.Away}
          VOdds={post.VOdds}
          Vcountry={post.Vcountry}
          Vtime={post.Vtime}
        />
      ))}
    </div>
  );
};
const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
