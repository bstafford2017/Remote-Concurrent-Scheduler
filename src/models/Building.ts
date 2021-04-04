import mongoose from 'mongoose'
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose'
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export default class Building extends Typegoose {
  @Field()
  @prop()
  id: string

  @Field()
  @prop()
  name: string
}

export const BuildingModel = new Building().getModelForClass(Building, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'Building' }
})
