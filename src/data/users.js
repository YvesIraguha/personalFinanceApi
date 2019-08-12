import models from "../../models";
import { createJwtToken } from "../helpers/authentication";

class UserController {
  static async getUser(id) {
    const user = await models.User.findOne({ where: { id } });
    return user;
  }

  static async getUsers() {
    const users = await models.User.findAll();
    return users;
  }

  static async createUser({ data }) {
    const { id, email, family_name: firstName, given_name: lastName } = data;
    const user = await models.User.findOne({ where: { id } });
    if (!user) {
      const newUser = await models.User.create({ id, email, firstName, lastName });
      const token = await createJwtToken(newUser.dataValues);
      return { token };
    }
    const token = await createJwtToken(user.dataValues);
    return { token };
  }
}

export default UserController;
