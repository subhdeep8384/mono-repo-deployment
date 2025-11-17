"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../generated/prisma/client");
const client = new client_1.PrismaClient();
exports.default = client;
client.user.create({
    data: {
        username: "test",
        password: "test"
    }
});
