import { Resolver, Query, Arg, Root, FieldResolver } from 'type-graphql'
import Event from '../models/Event'
import Building from '../models/Building'
import User from '../models/User'
import Room from '../models/Room'
import { selectEvent } from '../services/event'
import { selectRoom } from '../services/room'
import { selectUserById } from '../services/user'

@Resolver(() => Event)
export default class EventResolver {
  @Query(() => Event)
  async event(@Arg('id') id: string): Promise<Event> {
    return await selectEvent(id)
  }

  @FieldResolver(() => Room)
  async room(@Root() event: Event): Promise<Room> {
    return await selectRoom(event.room)
  }

  @FieldResolver(() => User)
  async user(@Root() room: Room): Promise<User> {
    return await selectUserById(room.id)
  }
}
