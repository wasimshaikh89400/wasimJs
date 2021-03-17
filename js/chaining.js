function one(greet) {
  return {
    two(user) {
      console.log(`${greet} ${user}`);
    },
  };
}

one("Hello").two("Alex");

function three(greet) {
  return (user) => console.log(`${greet} ${user}`);
}

three("Hello")("John");
