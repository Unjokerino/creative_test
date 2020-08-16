
export default {
    async getApartments (cb) {
     const response = await fetch(`entities.json`)
     const json = await response.json()
     return cb(json)        
    },
}