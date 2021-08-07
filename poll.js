module.exports = {
  
  name: "poll",
  code: `$title[Poll Time!]
$addReactions[👍;👎;❔]
$description[$message] 
$footer[👍 Yes - 👎 Not - ❔ Maybe]
$color[fa0606]
$argsCheck[>1;**Use:** \`$getServerVar[prefix]poll <PollMessage>\`]
$onlyPerms[admin;**You need Administrator Permissions!**]`
}
