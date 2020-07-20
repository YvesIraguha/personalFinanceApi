import jwt from "jsonwebtoken";

export const createJwtToken = async payload => {
  try {
    const secretKey = process.env.SECRET_KEY;
    const token = await jwt.sign(payload, secretKey, { algorithm: "HS256" });
    return token;
  } catch (error) {
    throw new Error("error is happening over");
  }
};

export const decodeToken = async token => {
  try {
    const secretKey = process.env.SECRET_KEY;
    const decoded = await jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    throw new Error("We are unable to authenticate you");
  }
};
