import React from 'react'

function TopicBlock({topic,filterString}) {
    return (
        <details>
            <summary>{topic.topic_name}</summary>
            {topic.sub_topics.map(sub_topic => {
                return (
                <details key={sub_topic.module_id}>
                    <summary>{sub_topic.module_name}</summary>
                    {
                        sub_topic.chapters
                        .filter(chapter => chapter.chapter_name.toLowerCase().includes(filterString.toLocaleLowerCase()))
                        .map(chapter => (
                                <div key={chapter.chapter_id}>
                                    <p>{chapter.chapter_name}</p>
                                </div>
                            )
                        )
                    }

                </details>)
            }) 
             }
        </details>
    )
}

export default TopicBlock
