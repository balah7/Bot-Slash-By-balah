const Discord = require("discord.js")

module.exports = {
    name: "banidos",
    description: "Veja os membros banidos",
    type: 'CHAT_INPUT',

  run: async(client, interaction) => {

    let perm = 'BAN_MEMBERS'

    if (!interaction.member.permissions.has(perm)) return interaction.reply(`**Para usar este comando você precisa da permissão \`${perm}\`!**`)
    if(!interaction.guild.me.permissions.has(perm)) return interaction.reply(`**Não tenho permissão para ver os banidos do servidor!**`)

    const banimentos = interaction.guild.bans.fetch()
    const bans = (await banimentos).map((z) => z.user.tag).join("\n") || "\`\`\`Ninguém foi banido\`\`\`"
    const banidoss = new Discord.MessageEmbed()
    .setTitle(`Banidos - ${interaction.guild.name}`)
    .setDescription(bans)
    .setColor("RANDOM")
    .setFooter({ text: `Requerido por: ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true, format: "png" }) })
    .setTimestamp(new Date())

    interaction.reply({embeds: [banidoss]})
  }
  }