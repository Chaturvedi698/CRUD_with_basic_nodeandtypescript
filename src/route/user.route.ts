import { IncomingMessage, ServerResponse } from "http";
import {
  createuser,
  deleteuser,
  getusers,
  updateuser,
  finduser,
} from "../controller/user.controller";

export async function handleRequest(req: IncomingMessage, res: ServerResponse) {
  if (req.url === "/show" && req.method === "GET") {
    getusers(req, res);
  } else if (req.url === "/create" && req.method === "POST") {
    createuser(req, res);
  } else if (req.url?.startsWith("/delete/") && req.method === "DELETE") {
    deleteuser(req, res);
  } else if (req.url?.startsWith("/update/") && req.method === "PUT") {
    updateuser(req, res);
  } else if (req.url?.startsWith("/search/") && req.method === "GET") {
    finduser(req, res);
  } else {
    res.statusCode = 400;
    res.end("The url you requested is not available");
  }
}
