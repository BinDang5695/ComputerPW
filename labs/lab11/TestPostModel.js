const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

lab11();

async function lab11(){
    const userId = 1;
    const postId = 5;

    const requestHandler = new RequestHandler();

    const post = await requestHandler.printTargetPost(userId, postId);

    const allPosts = await requestHandler.printAllPosts(userId);
}