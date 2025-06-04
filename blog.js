const sheetId = '17iufzUqgbE5aMjNF4i39Ohd655kLsOJuFl2w8tBCJzU';
const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;


fetchPosts()



function fetchPosts() {

    let postsHtml = ""

    fetch(url)
        .then(res => res.text())
        .then(text => {
            const json = JSON.parse(text.substr(47).slice(0, -2));
            let posts = json.table.rows.map(row => row.c.map(cell => cell?.v));

            posts.map(post => {
                postsHtml += `<article class="blog-post" >
                                <div class="post-date">March 15, 2024</div>
                                <h2 class="post-title">${post[1]}</h2>
                                <p class="post-excerpt">
                                    ${post[2].substring(0,150)}...
                                </p>
                                <div class="post-tags">
                                    <span class="tag">JavaScript</span>
                                    <span class="tag">React</span>
                                    <span class="tag">Web Development</span>
                                    <span class="tag">Scalability</span>
                                </div>
                                <a href="blog-details.html?id=${post[0]}" class="read-more">Read Full Article</a>
                                </article>`;
            })

                const blogPosts = document.querySelector(".blog-posts");
    
                blogPosts.innerHTML = postsHtml;
        });


}


