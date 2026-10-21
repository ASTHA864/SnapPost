const ImageKit = require("@imagekit/nodejs")

if (!process.env.IMAGEKIT_PRIVATE_KEY) {
  throw new Error("IMAGEKIT_PRIVATE_KEY is not set");
}

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer) {
  const result = await imagekit.files.upload({
    file : buffer.toString("base64") ,
    fileName : "image.jpg"
  })
  return result;
}

module.exports = uploadFile;