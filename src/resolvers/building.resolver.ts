import { Resolver, Query, Arg } from 'type-graphql'
import Building from '../models/Building'
import { selectBuilding } from '../services/building'

@Resolver(() => Building)
export default class BuildingResolver {
  @Query(() => Building)
  async building(@Arg('id') id: string): Promise<Building> {
    return await selectBuilding(id)
  }
}
