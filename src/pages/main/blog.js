import React, {useState, useEffect} from 'react';
// import axios from 'axios'
import * as contentful from 'contentful';

import BlogItem from '../blog/BlogItem';
import BlogPost from '../blog/BlogPost'
import PageHeader from '../../components/PageHeader';


// const API_URL = 'https://cdn.contentful.com'
// const SPACE_ID = '8ev2r0g3d7rr'
// const ACCES_TOKEN = 'bCeSaW22eJLAZancnGMTdBES4tD4QqECjGZFa5USrS0'

export default function Blog() {
    const [posts, setPost] = useState([]);
    // useEffect(() => {
    //   async function getPosts(){
    //       const response = await axios.get(`${API_URL}/spaces/${SPACE_ID}/entries?access_token=${ACCES_TOKEN}&content_type=post`);
    //       setPost(response.items)
    //       console.log(response.items)
    //     }
    //   getPosts()
    // }, [])

    const client = contentful.createClient({
        space: '8ev2r0g3d7rr',
        accessToken: 'bCeSaW22eJLAZancnGMTdBES4tD4QqECjGZFa5USrS0'
    })
    
    useEffect(() => {
      const getBlogPost=()=>{
        client.getEntries().then((res)=>{
            setPost(res.items);
            console.log(res)
        })
      }
        getBlogPost()

    }, [])

   
    return (

        <div>
            <PageHeader color="is-info" title="Code Blog">
                This is my blog, motherfucker!
            </PageHeader>
            <br/>

       
                <BlogItem posts={posts} />
                <BlogPost posts={posts} />
        {/* {
            posts.map(({post}, i)=>
                <BlogItem key={i} post={post} />
            )
        } */}
        </div>
    )
}
