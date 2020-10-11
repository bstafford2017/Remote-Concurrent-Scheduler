import connection from '../utils/database'
import { log } from '../utils'

export async function update(table: string, update: object[]): Promise<any> {
  table = connection.escape(table)

  const updateStr = Object.keys(update).reduce(
    (tot, nxt) => tot + ',' + nxt.toString(),
    ''
  )

  const query: string = `UPDATE ${table} VALUES (${updateStr})`
  console.log(query)
  return await connection.query(query)
}

export async function updateWithWhere(
  table: string,
  update: object[],
  where: object,
  where_connective: string
): Promise<any> {
  table = connection.escape(table)

  const updateStr = update.reduce(
    (obj) =>
      Object.keys(obj).reduce((tot, nxt) => tot + ',' + nxt.toString(), ''),
    ''
  )
  const whereStr = Object.keys(where).reduce(
    (tot, nxt) => tot + ` ${where_connective} ` + nxt.toString(),
    ''
  )

  const query: string = `UPDATE ${table} VALUES (${updateStr}) WHERE ${whereStr}`
  log('database-log.txt', query)
  return await connection.query(query)
}
