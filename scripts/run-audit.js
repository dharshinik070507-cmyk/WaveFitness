const { execSync } = require("child_process");
try {
  execSync("npx tsx scripts/audit-checks.ts", { stdio: "inherit" });
  process.exit(0);
} catch (e) {
  process.exit(1);
}
