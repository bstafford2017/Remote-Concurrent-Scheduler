import { ObjectType, Field } from 'type-graphql'
import { prop, getModelForClass } from '@typegoose/typegoose'
import Building from '../models/Building'

@ObjectType()
export default class Room {
  @Field()
  @prop()
  id: string

  @Field()
  @prop()
  number: string

  @Field()
  @prop()
  seats: number

  @Field()
  @prop()
  projector: boolean

  @Field(() => Building)
  building?: Building

  @prop()
  buildingId: string
}

export const RoomModel = getModelForClass(Room)
