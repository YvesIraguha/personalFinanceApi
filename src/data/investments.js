import models from "../../models";
import { decodeToken } from "../helpers/authentication";

class InvestmentController {
  static async getInvestment(id) {
    const investment = await models.Investment.findOne({
      where: { id }
    });
    return investment;
  }
  static async getAllInvestments(token) {
    const user = await decodeToken(token);
    const { id: userId } = user;
    const investments = await models.Investment.findAll({ where: { userId } });
    return investments;
  }

  static async createInvestment(
    name,
    matureDate,
    initialAmount,
    targetAmount,
    token
  ) {
    const user = await decodeToken(token);
    if (!user) throw new Error("You should be logged in");
    const { id: userId } = user;
    return models.Investment.create({
      name,
      matureDate,
      initialAmount,
      targetAmount,
      userId
    });
  }
  static async deleteInvestment(id, token) {
    const user = await decodeToken(token);
    if (!user) throw new Error("You should be logged in");
    const { id: userId } = user;
    const deleted = await models.Investment.destroy({
      where: { id, userId },
      returning: true
    });
    return deleted;
  }

  static async updateInvestment(id, rest, token) {
    const user = await decodeToken(token);
    if (!user) throw new Error("You should be logged in");
    const { id: userId } = user;
    const updated = await models.Investment.update(rest, {
      where: { id, userId },
      returning: true
    });
    return updated[1][0];
  }
}

export default InvestmentController;
