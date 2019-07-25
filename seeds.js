const chalk = require('chalk');
const faker = require('faker');
const Post = require('./models/post');

async function seedPosts() {
  await Post.remove({});
  for (const i of new Array(40)) {
    const post = {
      title: faker.lorem.word(),
      description: faker.lorem.text(),
      coordinates: [-122.0842499, 37.4224764],
      author: {
        _id: '5bb27cd1f986d278582aa58c',
        username: 'ian'
      }
    };
    await Post.create(post);
  }
  console.log(chalk.blue.bold('40 new posts created'));
}

module.exports = seedPosts;
