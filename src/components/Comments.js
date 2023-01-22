import React from 'react'

export default function Comments({comments, isHidden}) {

   const hasComments = comments.map((comment) => {
        return(
            <div key={comment.id}>
                <h4>{comment.user}</h4>
                <p>{comment.comment}</p>
            </div> 
        )
    })

    const commentList = (isHidden)? hasComments  : null
    
  return (
    <div>
        {commentList}
    </div>
  )
}
