module.exports = {
    name: "ping",
    description: "Veja meu ping",
    type: 'CHAT_INPUT',

  run: async(client, interaction) => {
   interaction.reply(`📡 | Meu ping atual está em: **${client.ws.ping}** ms`)
    }
}