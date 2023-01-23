import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";
type ValidateRouteTypes = (
  req: NextApiRequest,
  res: NextApiResponse,
  user: any,
) => void;

interface ResultToken {
  id: number;
  email: string;
}

export const validateRoute = (handler: ValidateRouteTypes) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (token) {
      let user;
      try {
        const decoded = jwt.verify(token, "hello") as ResultToken;
        user = await prisma.user.findUnique({ where: { id: decoded.id } });
        if (!user) {
          throw new Error("Not real user");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not Authorized" });
        return;
      }
      return handler(req, res, user);
    }
    res.status(401);
    res.json({ error: "Not Authorized" });
  };
};

export const validateToken = (token: string) => {
  const user = jwt.verify(token, "hello");
  return user;
};
