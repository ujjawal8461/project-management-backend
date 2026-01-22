const prismaClient = require("../../config/db");


/**
 * Create new user in DB
 */
const createUser = async ({ fname, lname, email, hashedPassword }) => {
    return prismaClient.user.create({
        data: {
            firstName: fname,
            lastName: lname,
            email,
            password: hashedPassword,
        },
    });
};


/**
 * Find user by email in DB
 */
const findByEmail = async (email) => {
    return prismaClient.user.findUnique({
        where: { email },
    });
};

/**
 * Find user by its id in DB
 */
const findUserById = async (id) => {
    return prismaClient.user.findUnique({
        where: { id },
    });
};

module.exports = { createUser, findByEmail, findUserById }