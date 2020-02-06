import React from 'react'
import {Link} from 'react-router-dom'

import * as Markdown from 'react-markdown'
import moment from 'moment'

export default function BlogItem({posts}){
    console.log(posts)
    return(
        <>
            {
                posts.map(post =>(
                    <div className="box">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={post.fields.icon} alt="Image"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <h1>{post.fields.title}</h1>
                                    <Markdown source={post.fields.description.split(" ").splice(0,150).join("").concat('...')} />
                                </div>
                                <div className="level">
                                    <div className="level-left">
                                        <Link className="level-item button is-small is-link is-outlined" to={post.path}>Read More</Link>
                                    </div>
                                    <div className="level-right">
                                        <p className="level-item has-text-link is-size-7">
                                            {moment(post.fields.data).calendar(null,{
                                                sameDay: '[Today]',
                                                lastDay: '[Yesterday]',
                                                lastWeek: '[Last] dddd',
                                                sameElse: 'Do MMM YYYY'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    // <div key={post.sys.id} >
                    //     <h1>{post.fields.title} </h1>
                    //     <img src={post.fields.icon} alt=""/>
                    //     <p>{ post.fields.date}</p>
                    //     <Markdown source={post.fields.description} />
                        
                    // </div>
                ))
            }
        </>
    )
}


