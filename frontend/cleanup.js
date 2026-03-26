const fs = require("fs");

try {
  fs.rmSync("app/buyer", { recursive: true, force: true });
} catch (e) {}
try {
  fs.rmSync("app/seller", { recursive: true, force: true });
} catch (e) {}
try {
  fs.rmSync("app/auth", { recursive: true, force: true });
} catch (e) {}
try {
  fs.rmSync("scripts", { recursive: true, force: true });
} catch (e) {}
try {
  fs.rmSync("scaffold.js");
} catch (e) {}
try {
  fs.rmSync("app/page.tsx");
} catch (e) {}
