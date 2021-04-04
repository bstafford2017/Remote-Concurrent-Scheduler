import mongoose from 'mongoose'
import { Typegoose, prop } from 'typegoose'
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export default class Room extends Typegoose {
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

  @Field()
  @prop()
  building: string
}

export const RoomModel = new Room().getModelForClass(Room, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'Room' }
})
