function tip() {
  console.log(`Don't call me, I'm just an empty shell`);
}
module.exports = {
  ensureDirSync: tip,
  emptyDirSync: tip,
  ensureFileSync: tip,
  copySync: tip,
  copyFileSync: tip,
  existsSync: tip,
  writeFileSync: tip,
}