import React from 'react';
import JuustReply from './JuustReply';

function JuustPost({data}){
    const replies = data.replies;
    const picSrc = data.picture;
    const text = data.post;
    const poster = data.name;
    return(
        <div className="juust-post">
            <div className="juust-main">
                <div className="juust-name">
                    {poster}
                </div>
                <div className="juust-text">
                    {text}
                </div>
                <div className="juust-pic">
                    <img src={picSrc} />
                </div>
            </div>
            <div className="juust-replies">
                {replies.map(
                    (reply, i) => <JuustReply data={reply} key={"comment-" + poster + i} />
                )}
            </div>
        </div>
    )
}

export default JuustPost;