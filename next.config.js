/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb+srv://serjSililian:6I3glAACZ7srUq4X@nextAppCluster.upwau.mongodb.net/todosNext?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
