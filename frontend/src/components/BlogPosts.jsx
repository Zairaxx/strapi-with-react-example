import { useEffect, useState } from "react"
import {getData} from '../functions/functions'
let BlogPosts = (props) => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getData("http://localhost:1337/api/blog-posts").then(res => 
            setPosts(res.data)
        )},[]
    )

    return(
        <div>
            {
                posts && posts.map(post => {
                    return(
                    <div style={{border:"2px solid white"}}>
                        <h2>{post.attributes.Title}</h2>
                        <p>{post.attributes.Body}</p>
                    </div>)
                })
            }
        </div>
    )
}

export default BlogPosts