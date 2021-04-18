import {
  Resolver,
  Query,
  Arg,
  Root,
  FieldResolver,
  Authorized
} from 'type-graphql'
import Event from '../models/Event'
import User from '../models/User'
import Room from '../models/Room'
import { selectEvent, selectEvents } from '../services/event'
import { selectRoom } from '../services/room'
import { selectUserById } from '../services/user'
import { isAuthenticated } from '../services/user'

@Resolver(() => Event)
export default class EventResolver {
  @Authorized(isAuthenticated)
  @Query(() => Event)
  async event(@Arg('id') id: string): Promise<Event> {
    return await selectEvent(id)
  }

  @Authorized(isAuthenticated)
  @Query(() => [Event])
  async events(
    @Arg('start') start: string,
    @Arg('end') end: string
  ): Promise<Array<Event>> {
    return await selectEvents(start, end)
  }

  @FieldResolver(() => Room)
  async room(@Root() event: Event): Promise<Room> {
    return await selectRoom(event.roomId)
  }

  @FieldResolver(() => User)
  async user(@Root() event: Event): Promise<User> {
    return await selectUserById(event.userId)
  }
}
