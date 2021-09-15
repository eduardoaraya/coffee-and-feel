export default {
  //   Template literal is required to stringify the secret, if its not stringified it will not work
  JWT_SECRET: `${process.env.JWT_SECRET}`,
};
