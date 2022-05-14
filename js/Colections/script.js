function getAdmins(map) {
  let admins = []
  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key)
    }
  }
  return admins
}

const users = new Map()

users.set('Luiz', 'Admin')
users.set('Thiago', 'Admin')
users.set('Maria', 'User')
users.set('Júlia', 'User')

console.log(getAdmins(users))
