const Post = require("./Post");

class RequestHandler {

    async printTargetPost(userId, postId) {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            const data = await res.json();

            if (data.userId !== userId) {
                console.log("❌ Post does not belong to this user");
                return null;
            }

            const post = new Post(data.userId, data.id, data.title, data.body);

            console.log("\n=== Target Post ===");
            console.log(post);

            return post;

        } catch (err) {
            console.log("Error:", err);
        }
    }

    async printAllPosts(userId) {
        try {
            const data = await this._getAllPosts(userId);

            const posts = data.map(p => new Post(p.userId, p.id, p.title, p.body));

            console.log(`\n=== All posts of user ${userId} ===`);
            posts.forEach(p => {
                console.log(`(${p.id}) ${p.title}`);
            });

            return posts;

        } catch (err) {
            console.log("Error:", err);
        }
    }

    async _getAllPosts(userId) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        return res.json();
    }
}

module.exports = RequestHandler;