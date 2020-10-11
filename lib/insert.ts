import connection from '../utils/database'
import { selectWithWhere } from './select'
import { log } from '../utils'

export async function insert(table: string, update: object[]): Promise<any> {
  table = connection.escape(table)

  const updateStr = update.reduce(
    (obj) =>
      Object.keys(obj).reduce((tot, nxt) => tot + ',' + nxt.toString(), ''),
    ''
  )

  const query: string = `INSERT INTO ${table} VALUES (${updateStr})`
  log('database-log.txt', query)
  await connection.query(query)

  return await selectWithWhere(table, undefined, update, 'AND')
}
