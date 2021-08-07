module.exports = {
  
  name: "purge",
  code: `
$deletecommand
$deleteIn[2s]
Purged $message Message!.
$clear[$message]
$argsCheck[1;Use: \`$getServerVar[prefix]clear <ammountOfMessage>\`]
$onlyPerms[admin;**You need Administrator Permissions!**]`
}
