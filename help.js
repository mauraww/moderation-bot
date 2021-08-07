module.exports = { 

name: "help",
code: `$title[Slumped Help Menu]
$thumbnail[$userAvatar[$authorID]]
  $description[**- Slumped Prefix \`$getServerVar[prefix]\` **
**- Use \`$getServerVar[prefix]<NameCommand>\` to execute the Command. **

**MODERATION**

\`$getServerVar[prefix]kick\` - Kicked Someone from the server.
\`$getServerVar[prefix]ban\` - Banned User from the server.
\`$getServerVar[prefix]warn\` - Warned User.
\`$getServerVar[prefix]checkwarn\` - Checked the amount of warns the mentioned user got.
\`$getServerVar[prefix]removewarn\` - Removed one warn from the mentioned user.
\`$getServerVar[prefix]poll\` - Created polls.
\`$getServerVar[prefix]purge\` - Deleted Message.
\`$getServerVar[prefix]setprefix\` - Set Custom Prefix.

**Invite**
\`$getServerVar[prefix]invite\` - Invite me to your server!]

$color[fa0606]
$image[https://media.discordapp.net/attachments/841445020837478400/872895623832174622/image1.gif]
$footer[Made by mora#1999 | Moderation Commands]
$addTimestamp`

}
