const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function getPost(userId, postId) {
  try {
    const res = await fetch(`${BASE_URL}/posts/${postId}`);
    const data = await res.json();

    if (data.userId == userId) {
      console.log("\n=== Post Detail ===");
      console.log("Title:", data.title);
      console.log("Body:", data.body);
    } else {
      console.log("❌ Post does not belong to this user");
    }

  } catch (err) {
    console.log("Error:", err);
  }
}

async function getPostsByUser(userId) {
  try {
    const res = await fetch(`${BASE_URL}/posts?userId=${userId}`);
    const data = await res.json();

    console.log(`\n=== All posts of user ${userId} ===`);
    data.forEach(post => {
      console.log(`- (${post.id}) ${post.title}`);
    });

  } catch (err) {
    console.log("Error:", err);
  }
}

rl.question("Enter userId: ", async (userId) => {
  rl.question("Enter postId: ", async (postId) => {

    await getPost(userId, postId);
    await getPostsByUser(userId);

    rl.close();
  });
});