import React, { useState } from 'react'

export default function Video({isHidden,setIsHidden, data}){
    const [upVotes, setUpVotes] = useState(data.upvotes)
    const [downVotes, setDownVotes] = useState(data.downvotes)
    
    const handleUpVote = () => {
        setUpVotes(upVotes + 1)
    }
    const handleDownVote = () => {
        setDownVotes(downVotes + 1)
    }

    const handleHide = () => {
        setIsHidden((isHidden) => !isHidden)
    }

  return (
    <section>
        <iframe
        width="919"
        height="525"
        src={data.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
        />
        <h2>{data.title}</h2>
        <p>{data.views} Views | Uploaded {data.createdAt}</p>
        <button onClick={handleUpVote}>{upVotes}👍</button>
        <button onClick={handleDownVote}>{downVotes}👎</button>
        <br />
        <br />
        <div>
            <button onClick={handleHide}>{isHidden? 'Hide Comments' : 'Show Comments'}</button>
        </div>
        
    </section>
  )
}
