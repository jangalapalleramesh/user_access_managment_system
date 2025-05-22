const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Request",
  tableName: "requests",
  columns: {
    id: { primary: true, type: "int", generated: true },
    accessType: { type: "varchar" },
    reason: { type: "text" },
    status: { type: "varchar" }, // Pending | Approved | Rejected
  },
  relations: {
    user: { type: "many-to-one", target: "User" },
    software: { type: "many-to-one", target: "Software" },
  },
});
