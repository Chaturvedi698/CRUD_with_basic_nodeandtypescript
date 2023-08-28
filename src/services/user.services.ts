import { IncomingMessage, ServerResponse } from "http";
import UserModel from "../model/user.model";

export async function getUsers(req: IncomingMessage, res: ServerResponse) {
  try {
    const Users = await UserModel.find();
    res.statusCode = 200;
    res.end(JSON.stringify(Users));
  } catch (error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ message: "Internal Server Error 2" }));
  }
}

export async function createUser(req: IncomingMessage, res: ServerResponse) {
  let body: string = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", async () => {
    try {
      await UserModel.insertMany(JSON.parse(body));
      res.statusCode = 201;
      res.end(JSON.stringify({ message: "User created successfully" }));
    } catch (error) {
      res.statusCode = 500;
      res.end(JSON.stringify({ message: "Internal Server Error" }));
    }
  });
}

export async function deleteUser(req: IncomingMessage, res: ServerResponse) {
  try {
    const id = req.url?.slice(8);
    await UserModel.deleteOne({ _id: id });
    res.statusCode = 200;
    res.end(JSON.stringify({ id, message: `User of ${id} is deleted` }));
  } catch (error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ message: "Internal Server Error" }));
  }
}

export async function updateUser(req: IncomingMessage, res: ServerResponse) {
  let userId = req.url?.slice(8);

  let body: string = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    try {
      const updatedUserData = JSON.parse(body);
      const updatedUser = await UserModel.findOneAndUpdate(
        { _id: userId },
        updatedUserData
      );

      if (updatedUser) {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: "User updated successfully" }));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "User you requested is not found" }));
      }
    } catch (error) {
      res.statusCode = 500;
      res.end(JSON.stringify({ message: "Internal Server Error" }));
    }
  });
}

export async function findUser(req: IncomingMessage, res: ServerResponse) {
  try {
    const id = req.url?.slice(8);
    const Users = await UserModel.findOne({ _id: id });
    res.statusCode = 200;
    res.end(JSON.stringify(Users));
  } catch (error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ message: "User you requested is not present" }));
  }
}
