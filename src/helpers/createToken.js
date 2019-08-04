import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const secretKey = process.env.SECRET_KEY || "winwin";

export const createJwtToken = async payload => {
  try {
    const token = await jwt.sign(payload, secretKey, { algorithm: "HS256" });

    return token;
  } catch (error) {
    throw new Error("error is happening over");
  }
};

export const decodeToken = async token => {
  const decoded = await jwt.verify(token, secretKey);
  return decoded;
};
