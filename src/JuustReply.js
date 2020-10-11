import React from 'react';

function JuustReply({data}){
    const poster = data.name;
    const icon = data.icon;
    const post = data.post;
    const replies = (typeof data.replies === 'undefined') ? [] : data.replies;
    return(
        <div className="juust-reply">
            <div className="juust-reply-main">
                {poster}
            </div>
            <div className="juust-reply-content">
                {post}
            </div>
            <div className="juust-subreply">
                {replies.map(
                    (reply, i) => <JuustReply data={reply} key={"reply-" + poster + i} />
                )}
            </div>
        </div>
    )
}

export default JuustReply;