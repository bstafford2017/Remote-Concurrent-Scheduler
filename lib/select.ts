const connection = require('../utils/database')

export async function select(table: string, columns: string[]): Promise<any> {
  table = connection.escape(table)
  columns = columns.map((c) => connection.escape(c))

  const columnsStr = columns.reduce(
    (tot, nxt) => tot + ',' + nxt.toString(),
    ''
  )

  const query: string = `SELECT ${columnsStr} FROM ${table}`
  console.log(query)
  return await connection.query(query)
}

export async function selectWithWhere(
  table: string,
  columns: string[] = [],
  where: object,
  where_connective: string
): Promise<any> {
  table = connection.escape(table)
  columns = columns.map((c) => connection.escape(c))
  where_connective = connection.escape(where_connective)

  const columnsStr =
    columns.length == 0
      ? '*'
      : columns.reduce((tot, nxt) => tot + ',' + nxt.toString(), '')
  const whereStr = Object.keys(where).reduce(
    (tot, nxt) => tot + ` ${where_connective} ` + nxt.toString(),
    ''
  )
  const query: string = `SELECT ${columnsStr} FROM ${table} WHERE ${whereStr}`
  console.log(query)
  return await connection.query(query)
}

export async function selectWithJoinAndWhere(
  table: string,
  columns: string[],
  join: object,
  where: object,
  where_connective: string
): Promise<any> {
  table = connection.escape(table)
  columns = columns.map((c) => connection.escape(c))
  where_connective = connection.escape(where_connective)

  const columnsStr = columns.reduce(
    (tot, nxt) => tot + ',' + nxt.toString(),
    ''
  )
  const joinStr = Object.keys(join).reduce(
    (tot, nxt) => tot + ' ON ' + nxt.toString(),
    ''
  )
  const whereStr = Object.keys(where).reduce(
    (tot, nxt) => tot + ` ${where_connective} ` + nxt.toString(),
    ''
  )
  const query: string = `SELECT ${columnsStr} JOIN ${joinStr} FROM ${table} WHERE ${whereStr}`
  console.log(query)
  return await connection.query(query)
}
