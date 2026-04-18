const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const BASE_URL = "https://jsonplaceholder.typicode.com";

function getPost(userId, postId) {
  return fetch(`${BASE_URL}/posts/${postId}`)
    .then(res => res.json())
    .then(data => {
      if (data.userId == userId) {
        console.log("\n=== Post Detail ===");
        console.log("Title:", data.title);
        console.log("Body:", data.body);
      } else {
        console.log("❌ Post does not belong to this user");
      }
    })
    .catch(err => console.log("Error:", err));
}

function getPostsByUser(userId) {
  return fetch(`${BASE_URL}/posts?userId=${userId}`)
    .then(res => res.json())
    .then(data => {
      console.log(`\n=== All posts of user ${userId} ===`);
      data.forEach(post => {
        console.log(`- (${post.id}) ${post.title}`);
      });
    })
    .catch(err => console.log("Error:", err));
}

rl.question("Enter userId: ", (userId) => {
  rl.question("Enter postId: ", (postId) => {

    getPost(userId, postId)
      .then(() => getPostsByUser(userId))
      .then(() => rl.close());

  });
});