import { ObjectType, Field } from 'type-graphql'
import { prop, getModelForClass } from '@typegoose/typegoose'

@ObjectType()
export default class Building {
  @Field()
  @prop()
  id: string

  @Field()
  @prop()
  name: string
}

export const BuildingModel = getModelForClass(Building)
