const button = document.querySelector('#button');

const data = document.querySelector('.data');

async function fetchData() {
    data.innerHTML = 'loading posts';

    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
    try {

        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`error happened, ${response.status} `);
        }
        const posts = await response.json();

        data.innerHTML = "";

        const postList = document.createElement('ul');

        const postData = posts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = post.title;
            postList.appendChild(listItem);
        })
        data.appendChild(postList);
        
    } catch (error) {
        data.innerHTML = `An eror occured ${error.message}`;
        console.log("fetch failed", error);
    }

   

}

 button.addEventListener('click' , fetchData)