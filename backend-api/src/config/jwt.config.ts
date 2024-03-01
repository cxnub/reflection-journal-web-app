const config = {
    SECRET: process.env.JWT_SECRET,
    EXPIRATION: process.env.JWT_EXPIRATION || "30 days"
  };
  
  export default config;
  