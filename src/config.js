const inProduction = process.env.NODE_ENV === 'production'

const TOKEN = process.env.TOKEN

const PORT = process.env.PORT || 8000

const TRANSPORT_DEFAULTS = {}

const TRANSPORT_SETTINGS = {
  host: 'smtp.helsinki.fi',
  port: 587,
  secure: false,
}

module.exports = {
  inProduction,
  PORT,
  TRANSPORT_DEFAULTS,
  TRANSPORT_SETTINGS,
  TOKEN
}