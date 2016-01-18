function User() {
    if (User.instance) {
        return User.instance;
    }
    User.instance = this;
}

var user = new User()

console.log(user)
user.firstName = 'Taras'

var user2 = new User()

console.log(user2)

console.log(user)


