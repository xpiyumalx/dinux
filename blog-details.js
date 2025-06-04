const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const postId = urlParams.get("id");

const sheetId = '17iufzUqgbE5aMjNF4i39Ohd655kLsOJuFl2w8tBCJzU';
const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

fetch(url)
    .then(res => res.text())
    .then(text => {
        const json = JSON.parse(text.substr(47).slice(0, -2));
        let posts = json.table.rows.map(row => row.c.map(cell => cell?.v));

        const coverImg = document.querySelector(".cover-section");
        coverImg.style.backgroundImage  = `url(${posts[postId-1][3]})`

        const articleBody = document.querySelector(".article-body");
        articleBody.innerHTML = posts[postId - 1][2]


    });