// add faker and Post mode;

async function seedDb() {
  await Post.remove({});
  for(const i of new Array(40)) {
    let post = {
      //stuff
    }
  }
  await Post.create(post)
}