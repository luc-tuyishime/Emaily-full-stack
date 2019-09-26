// prod.js production keys here !!!
export default {
  GoogleClientID: process.env.GOOGLE_CLIENT_ID, //Identify our app to google server
  GoogleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};