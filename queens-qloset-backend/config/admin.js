module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd3c6bfc078659b88c1e0fd7131646e2f'),
  },
});
