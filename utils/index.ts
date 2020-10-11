import fs from 'fs'
import path from 'path'
import express from 'express'
import mysqldump from 'mysqldump'
import jwt from 'jsonwebtoken'
import select from '../lib/select'

export function isStr(obj: Object) {
  return typeof obj === 'string'
}

export function filter(str: string) {
  return str.toString().replace(/[`~!@#$%^&*()|+=?;'",.<>\{\}\[\]\\]/gi, '')
}

export async function dump() {
  try {
    await mysqldump({
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'rcs'
      },
      dumpToFile: 'logs/full-database.sql.gz',
      compressFile: true
    })
  } catch (err) {
    throw err
  }
}

export function log(file: string, content: string, noDump: boolean = false) {
  const timeString: string = `[${new Date().toISOString()}] : `
  const targetPath: string = path.join('./logs', file)
  try {
    if (fs.existsSync(targetPath)) {
      fs.appendFileSync(targetPath, timeString + content + '\n')
    } else {
      if (!fs.existsSync('./logs')) {
        fs.mkdirSync('./logs')
      }
      fs.writeFileSync(targetPath, timeString + content + '\n')
    }
  } catch (err) {
    throw err
  }

  // If dump function has an error and logs it
  if (typeof noDump === 'undefined') {
    dump()
  }
}

export function logger(
  req: express.Request,
  res: express.Response,
  next: Function
) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  const content = `[${req.method}:${ip}] ${req.protocol}://${req.get('host')}${
    req.originalUrl
  }: ${new Date()
    .toISOString()
    .slice(0, 10)} @ ${new Date().toLocaleTimeString()} : ${req.body}`
  const targetPath = path.join('./logs', 'log.txt')
  log(targetPath, content, false)
  next()
}

export async function verifyToken(
  req: express.Request,
  res: express.Response,
  next: Function
) {
  try {
    const token = req.cookies.token
    if (token) {
      await jwt.verify(token, 'secret-key')
      next()
    } else {
      res.sendStatus(400)
    }
  } catch (err) {
    log('error-log', err.toString())
    res.status(400).json(err)
  }
}

export async function verifyAdmin(
  req: express.Request,
  res: express.Response,
  next: Function
) {
  try {
    const token = req.cookies.token
    if (token) {
      const verifyToken: any = await jwt.verify(token, 'secret-key')
      const where = {
        username: verifyToken.username
      }
      const results: any = await select('users', where, 'OR')
      if (results[0].admin === 1) {
        next()
      } else {
        res.sendStatus(400)
      }
    } else {
      res.sendStatus(400)
    }
  } catch (err) {
    log('error-log', err.toString())
    res.status(400).json(err)
  }
}
