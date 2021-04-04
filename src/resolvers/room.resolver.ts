import { Resolver, Query, Arg } from 'type-graphql'
import Room from '../models/Room'
import { selectRoom } from '../services/room'

@Resolver(() => Room)
export default class RoomResolver {
  @Query(() => Room)
  async room(@Arg('id') id: string): Promise<Room> {
    return await selectRoom(id)
  }
}
