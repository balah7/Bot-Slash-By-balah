module.exports = {
    name: "id",
    description: "Veja seu id",
    type: 'CHAT_INPUT',

  run: async(client, interaction) => {
   interaction.reply(`**O seu id é: \`${interaction.user.id}\`**`)
    }
}