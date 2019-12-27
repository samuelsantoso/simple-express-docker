import userModel from "../models/users/schema";

export const createUser = async (name, address) => {
    await userModel.create({name, address});
};