import { SELECT_BUILDING, SELECT_ROOM, SELECT_BY_MONTH } from '.'

export const selectBuilding = (building: string) => ({
  type: SELECT_BUILDING,
  payload: building
})

export const selectRoom = (room: string) => ({
  type: SELECT_ROOM,
  payload: room
})

export const selectByMonth = (byMonth: boolean) => ({
  type: SELECT_BY_MONTH,
  payload: byMonth
})
