import React from 'react'

const BlogPost = (posts) => {
    return (
        <div>
            <h1>Blog Post</h1>
            <pre> {JSON.stringify(posts, null, 2)}</pre>

        </div>
    )
}

export default BlogPost
