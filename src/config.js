module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || 'cd52db62-e071-11e9-9d36-2a2ae2dbcce4',
  DB_URL: process.env.DB_URL || 'postgresql://dunder-mifflin@localhost/bookmarks',
}
