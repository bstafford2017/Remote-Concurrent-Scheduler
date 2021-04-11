import {
  Resolver,
  Query,
  Arg,
  Root,
  FieldResolver,
  ResolverInterface
} from 'type-graphql'
import Room from '../models/Room'
import { selectRoom, selectRooms } from '../services/room'
import Building from '../models/Building'
import { selectBuilding } from '../services/building'

@Resolver(() => Room)
export default class RoomResolver implements ResolverInterface<Room> {
  @Query(() => Room)
  async room(@Arg('id') id: string): Promise<Room> {
    return await selectRoom(id)
  }

  @Query(() => [Room])
  async rooms(): Promise<Array<Room>> {
    return await selectRooms()
  }

  @FieldResolver(() => Building)
  async building(@Root() room: Room): Promise<Building> {
    return await selectBuilding(room.buildingId)
  }
}
