import React from "react";
import TopicBlock from "./TopicBlock";

function Course({ data,filterString }) {
    console.log(data,filterString);
  return (
      <>
      <div>
      {
        data
           && 
        data.topics
        .map(topic => <TopicBlock key={topic.topic_id} topic={topic} filterString={filterString}/>)
      }
      </div>
      </>
  )
}

export default Course;
