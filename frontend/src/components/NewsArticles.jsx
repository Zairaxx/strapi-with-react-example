import { useEffect, useState } from "react"
import {getData} from '../functions/functions'
let NewsArticles = (props) => {

    let [articles, setArticles] = useState([]);

    useEffect(() => {
        getData("http://localhost:1337/api/news-articles").then(res => 
            setArticles(res.data)
        )},[]
    )

    return(
        <div>
            {
                articles && articles.map(article => {
                    return(
                    <div style={{border:"2px solid white"}}>
                        <h2>{article.attributes.Title}</h2>
                        <p>{article.attributes.Body}</p>
                        <p>Skriven: {article.attributes.Written} </p>
                    </div>)
                })
            }
        </div>
    )
}

export default NewsArticles