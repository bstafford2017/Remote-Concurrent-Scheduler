import connection from '../utils/database'
import { log } from '../utils'

export async function remove(
  table: string,
  where: number[],
  primary_key: string
): Promise<any> {
  table = connection.escape(table)
  primary_key = connection.escape(primary_key)

  // const whereStr = Object.keys(where).reduce(
  //   (tot, nxt) => tot + ` OR ${primary_key} = ${nxt.toString()} `,
  //   ''
  // )

  const whereStr = where.reduce(
    (tot, nxt) => tot + ` OR ${primary_key} = ${nxt} `,
    ''
  )

  const query: string = `DELETE FROM ${table} WHERE ${whereStr}`
  log('database-log.txt', query)
  return await connection.query(query)
}
