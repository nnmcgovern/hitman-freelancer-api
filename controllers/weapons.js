import Weapon from "../models/Weapon.js"

export const getWeapons = async (req, res) => {
  // no query parameters, responds with all docs
  if (!Object.keys(req.query).length) {
    const weapons = await Weapon.find()
    res.json(weapons)
  }
  // with query parameters
  else {
    const keys = Object.keys(req.query)

    // multiple query parameters
    if (keys.length > 1) {
      const arr = []

      keys.forEach(async key => {
        arr.push({ [`${key}`]: req.query[key] })
      })

      const weapons = await Weapon.find({ $and: [...arr] })

      if (weapons.length) {
        res.json(weapons)
      }
      else {
        res.json({ message: "Document(s) not found" })
      }
    }
    // one query paramter
    else {
      keys.forEach(async key => {
        const weapons = await Weapon.find({ [`${key}`]: req.query[key] })

        if (weapons.length) {
          res.json(weapons)
        }
        else {
          res.json({ message: "Document(s) not found" })
        }
      })
    }
  }
}