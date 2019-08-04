import axios from "axios";
import errorHandler from "../middlewares/errorHandler";
import { createJwtToken } from "../helpers/createToken";
const resolvers = {
  Query: {
    async getAllExpenses(root, args, { models, user }) {
      const { id: userId } = user;
      return models.Expense.findAll({ where: { userId } });
    },
    async getExpense(root, { id }, { models, user }) {
      const { id: userId } = user;
      const expense = await models.Expense.findOne({
        where: { id, userId },
        include: [{ model: models.User, attributes: ["firstName", "lastName"] }]
      });
      return expense;
    },
    async getUsers(root, args, { models }) {
      const users = await models.User.findAll();
      return users;
    }
  },
  Mutation: {
    async createExpense(root, { type, quantity, price }, { models, user }) {
      const { id: userId } = user;

      return models.Expense.create({
        type,
        quantity,
        price,
        userId
      });
    },
    async deleteExpense(root, { id }, { models, user }) {
      const { id: userId } = user;
      const deleted = await models.Expense.destroy({
        where: { id, userId },
        returning: true
      });
      return deleted;
    },
    async updateExpense(root, { id, ...rest }, { models, user }) {
      const { id: userId } = user;
      const updated = await models.Expense.update(rest, {
        where: { id, userId },
        returning: true
      });
      return updated[1][0].dataValues;
    },
    async createUser(root, { accessToken }, { models }) {
      const profileData = await axios.get(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
      );
      const {
        id,
        email,
        family_name: firstName,
        given_name: lastName
      } = profileData.data;

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
};

export default resolvers;
