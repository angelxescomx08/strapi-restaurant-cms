module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '603331ba1358096908d7c5df0614ae86'),
  },
});
