const saveUserInfo = (user) => {
    const saveUser = {
        _id: user._id,
        username: user.username,
        email: user.email
    }

    return saveUser
}

module.exports = saveUserInfo