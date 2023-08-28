import { IncomingMessage, ServerResponse } from "http";
import {
  getUsers,
  deleteUser,
  updateUser,
  createUser,
  findUser,
} from "../services/user.services";

export async function getusers(req: IncomingMessage, res: ServerResponse) {
  await getUsers(req, res);
}

export async function createuser(req: IncomingMessage, res: ServerResponse) {
  await createUser(req, res);
}

export async function deleteuser(req: IncomingMessage, res: ServerResponse) {
  await deleteUser(req, res);
}

export async function updateuser(req: IncomingMessage, res: ServerResponse) {
  await updateUser(req, res);
}

export async function finduser(req: IncomingMessage, res: ServerResponse) {
  await findUser(req, res);
}
