import BlogPosts from "./BlogPosts"
import NewsArticles from "./NewsArticles"

let StartPage = (props) => {
    return(
        <div>
            <h1>{props.rubrik}</h1>
            <p>Vår Strapi-webbplats!</p>
            <h2>Featured:</h2>
            <div className="featured-posts">
                {
                    props.featured === "NewsArticle" ? 
                    <NewsArticles articles={[1,2,3]}/> : props.featured == "Blogpost" ? <BlogPosts posts={[1,2]}/> : null
                }
            </div>
        </div>
    )
}

export default StartPage