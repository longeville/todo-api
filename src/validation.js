const checkIfValidId = (id) => {
    const regexExp =
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    return regexExp.test(id);
};

const checkIfValidTodo = (todo) => {
    if (!todo) {
        return false;
    }
    const { name, isDone, category } = todo;
    return (
        !!name &&
        name.length > 0 &&
        typeof isDone === "boolean" &&
        !!category &&
        category.length > 0
    );
};

const checkIfValidUser = (user) => {
    if (!user) {
        return false;
    }
    const {
        firstName,
        lastName,
        email,
    } = user;
    console.log({
        firstName,
        lastName,
        email
    });
    return (
        !!firstName &&
        firstName.length > 0 &&
        !!lastName &&
        lastName.length > 0 &&
        !!email &&
        email.length > 0
    );
};

const checkIfValidUserUpdate = (user) => {
    if (!user) {
        return false;
    }
    const {
        firstName,
        lastName,
        email,
        statistics: { registrationDate, totalOnlineTime },
    } = user;
    console.log({
        firstName,
        lastName,
        email,
        registrationDate,
        totalOnlineTime,
    });
    return (
        !!firstName &&
        firstName.length > 0 &&
        !!lastName &&
        lastName.length > 0 &&
        !!email &&
        email.length > 0 &&
        !!registrationDate &&
        registrationDate.length > 0 &&
        totalOnlineTime >= 0
    );
};

module.exports = {
    checkIfValidId,
    checkIfValidTodo,
    checkIfValidUser,
    checkIfValidUserUpdate
};
