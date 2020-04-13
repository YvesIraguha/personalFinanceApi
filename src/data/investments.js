import { Op } from "sequelize";
import models from "../../models";
import { decodeToken } from "../helpers/authentication";

class InvestmentController {
  static async getInvestment(id) {
    const investment = await models.Investment.findOne({
      where: { id }
    });
    return investment;
  }
  static async getAllInvestments(token, startDate, endDate) {
    const user = await decodeToken(token);
    const { id: userId } = user;
    let investments;
    if (startDate && endDate) {
      investments = await models.Investment.findAll({
        where: {
          userId,
          createdAt: {
            [Op.between]: [
              new Date(startDate).getTime(),
              new Date(endDate).getTime()
            ]
          }
        },
        order: [["createdAt", "DESC"]]
      });
    } else {
      investments = await models.Investment.findAll({
        where: { userId },
        order: [["createdAt", "DESC"]]
      });
    }
    return investments;
  }

  static async createInvestment(
    name,
    matureDate,
    initialAmount,
    targetAmount,
    pictureUrl,
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
      pictureUrl,
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
