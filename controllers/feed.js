exports.getPosts = (req, res, next) => {
    return res.status(200).json({
        posts: [{ title:'First Post', content:'This is my first post'}]
    });
};  

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
   return res.status(201).json({
        message: 'Post created Sucessfully',
        post: {id: new Date().toISOString(), title: title, content: content}
    });
};