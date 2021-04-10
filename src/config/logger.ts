import { createLogger, format, transports } from 'winston'

export default createLogger({
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'rcs-graphql' },
  transports: [
    new transports.File({ filename: './logs/error.log', level: 'error' }),
    new transports.File({ filename: './logs/info.log' })
  ]
}).add(
  new transports.Console({
    format: format.combine(format.colorize(), format.simple())
  })
)
