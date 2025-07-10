const http = require("http");


let users = [
  {id : 1 , name : "Mohamed" , age : 20},
  {id : 2 , name : "Mostafa"  , age : 25},
  {id : 3 , name : "Omar" , age : 22}
]

let posts = [
  {pid : 10 , title : "post 1" , desc : "desc 1"},
  {pid : 20 , title : "post 2" , desc : "desc 2"},
  {pid : 30 , title : "post 3" , desc : "desc 3"}
]

const server = http.createServer((req, res) =>{
  if (req.url == "/users" && req.method == "GET"){
    res.setHeader("Content-Type" , "application/json");
    res.end(JSON.stringify(users));
  }
  else if (req.url == '/users' && req.method == "POST"){
    req.on("data" , (chunk)=>{
      let newUser = JSON.parse(chunk)
      let exist = users.find(user => user.id == newUser.id);
      if (exist){
        res.end("user already exist");
      }
      else{
        users.push(newUser);
        res.end("user added successfully");
      }
    })
  }
  else if (req.url == "/users" && req.method == "DELETE"){
    req.on("data" , (chunk)=>{
      let {id} = JSON.parse(chunk);
      let exist = users.find(user => user.id == id);
      if (exist){
      users = users.filter(user => user.id != id);
      res.end("user deleted successfully");
      }
      else{
        res.end("user not found");
      }
    })
  }
  else if (req.url == "/users" && req.method == "PUT"){
    req.on("data" , (chunk)=>{
      let updatedUser = JSON.parse(chunk);
      let index = users.findIndex(user => user.id == updatedUser.id);
      if (index != -1){
        users[index] = updatedUser;
        res.end("user updated successfully");
      }
      else {
        res.end("user not found");
      }
    })
  }

  else if (req.url == "/posts" && req.method == "GET"){
    res.setHeader("Content-Type" , "application/json");
    res.end(JSON.stringify(posts));
  }
  else if(req.url == "/posts" && req.method == "POST"){
    req.on("data" , (chunk)=>{
      let newPost = JSON.parse(chunk);
      let exist = posts.find(post => post.pid == newPost.pid);
      if (exist){
        res.end("post already exist");
      }
      else{
        posts.push(newPost);
        res.end("post added successfully");
      }
    })
  }
  else if (req.url == "/posts" && req.method == "DELETE"){
    req.on("data" , (chunk)=>{
      let {pid} = JSON.parse(chunk);
      let exist = posts.find(post => post.pid == pid);
      if (exist){
      posts = posts.filter(post => post.pid != pid);
      res.end("post deleted successfully");
      }
      else{
        res.end("post not found");
      }
    })
  }
  else if (req.url == "/posts" && req.method == "PUT"){
    req.on("data" , (chunk)=>{
      let updatedPost = JSON.parse(chunk);
      let index = posts.findIndex(post => post.pid == updatedPost.pid);
      if (index != -1){
        posts[index] = updatedPost;
        res.end("post updated successfully");
      }
      else {
        res.end("post not found");
      }
    })
  }   
  else{
    res.end("Not found");
  }
})

server.listen(3000, ()=>{
  console.log("server is running");
})