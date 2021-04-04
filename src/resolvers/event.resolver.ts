import { Resolver, Query, Arg } from 'type-graphql'
import Event from '../models/Event'
import { selectEvent } from '../services/event'

@Resolver(() => Event)
export default class EventResolver {
  @Query(() => Event)
  async event(@Arg('id') id: string): Promise<Event> {
    return await selectEvent(id)
  }
}
