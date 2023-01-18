import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const articles = posts.map((post) =>{
        return <main key={post.id}>
            {post.title} 
            {post.date} 
            {post.preview}
            {post.minutes} min

        </main>
    })
    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;