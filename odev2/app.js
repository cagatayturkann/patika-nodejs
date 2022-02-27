let posts = [
  {
    author: "Çağatay",
    title: "Lorem Dolor",
    post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam id quis doloribus vero soluta laudantium.",
  },
  {
    author: "Jane Doe",
    title: "Lorem dolor",
    post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam id quis doloribus vero soluta laudantium.",
  },
  {
    author: "John Doe",
    title: "Lorem Lorem",
    post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam id quis doloribus vero soluta laudantium.",
  },
];

const listPosts = () => {
  posts.map((post)=> {
    console.log(`Author: ${post.author}** Title: ${post.title}** Post: ${post.post}\n`);
  } )
}
const addPost = (newPost) => {
  return new Promise((resolve,reject) =>{
    posts.push(newPost);
    resolve(posts)
  });
}

async function showPosts() {
  try {
    await addPost({
      author: "Rüzgar",
      title: "Lorem Lorem Ipsum dolor samet",
      post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam id quis doloribus vero soluta laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam id quis doloribus vero soluta laudantium.",
    });
    listPosts();
  } catch (error) {
    console.log(error);
  }
}

showPosts();