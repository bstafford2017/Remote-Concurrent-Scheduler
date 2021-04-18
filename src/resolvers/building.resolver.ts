import { Resolver, Query, Arg, Authorized } from 'type-graphql'
import Building from '../models/Building'
import { selectBuilding, selectBuildings } from '../services/building'
import { isAuthenticated } from '../services/user'

@Resolver(() => Building)
export default class BuildingResolver {
  @Authorized(isAuthenticated)
  @Query(() => Building)
  async building(@Arg('id') id: string): Promise<Building> {
    return await selectBuilding(id)
  }

  @Authorized(isAuthenticated)
  @Query(() => [Building])
  async buildings(): Promise<Array<Building>> {
    return await selectBuildings()
  }
}
