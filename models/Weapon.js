import mongoose from "mongoose"

const Weapon = new mongoose.Schema({
  "name": {
    type: String
  },
  "image": {
    type: String
  },
  "description": {
    type: String
  },
  "type": {
    type: [String]
  },
  "rarity": {
    type: String
  },
  "capacity": {
    type: String
  },
  "twoHanded": {
    type: Boolean
  },
  "concealable": {
    type: Boolean
  },
  "friskHidden": {
    type: Boolean
  },
  "illegalItem": {
    type: Boolean
  },
  "smuggleItem": {
    type: Boolean
  },
  "tags": {
    type: [String]
  },
  "gearSlots": {
    type: Number
  }
})

export default mongoose.model("weapons", Weapon)