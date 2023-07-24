import db from "../db/connection.js"
import weaponData from "./weaponData.json" assert {type: "json"}
import Weapon from "../models/Weapon.js"

const insertData = async () => {
  await db.dropDatabase()
  console.log("Database dropped")

  await Weapon.create(weaponData)
  console.log("Weapons created")

  await db.close()
}

insertData()