const { Client, CommandInteraction } = require("discord.js");
const Discord = require("discord.js");
const { MessageSelectMenu, MessageActionRow } = require("discord.js");


module.exports = {
name: "help",
description: "Veja os meus comandos",
type: 'CHAT_INPUT',

    run: async(client, interaction, args) => {

        let ajuda = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription(`**Veja meus comandos com o menu abaixo:**`)
        .setFooter({ text: client.user.tag, iconURL: client.user.displayAvatarURL()})
        .setTimestamp(new Date());

        let painel = new MessageActionRow().addComponents( new MessageSelectMenu()
        .setCustomId('menu')
        .setPlaceholder('Selecione uma categoria abaixo.')
        .addOptions([{
                    label: 'Painel inicial',
                    description: 'Volte para a pagina inicial.',
                    emoji: '<:ShirakameReturn:956685028627210240>',
                    value: 'home',
                    },
                     {
                       label: 'Mod',
                       description: 'Exibe todos os comandos de Moderação.',
                       emoji: '🔧',
                       value: 'mod',
                     },
                     {
                        label: 'Util',
                        description: 'Exibe todos os comandos de Utilidade.',
                        emoji: '🥏',
                        value: 'util',
                      },
                     
            ])

        );
    
//créditos: CroneGamesPlays#9901

        interaction.reply({ embeds: [ajuda], components: [painel], ephemeral: false }).then(() => {

            const filtro = (i) => 
              i.customId == 'menu' //Era so ter tirado o filtro de cmd, pois agente aqui ta lidando com slash. ;)
        
            const coletor = interaction.channel.createMessageComponentCollector({
              filtro
            });  

            coletor.on('collect', async (collected) => {

              let valor = collected.values[0]
              collected.deferUpdate()

        if (valor === 'home') {
            interaction.editReply({ embeds: [ajuda], components: [painel], ephemeral: false });

        };

        if (valor === 'mod') {

          let mod = new Discord.MessageEmbed()

.setTitle('Comandos de Mod')
.setColor('RANDOM')
.setThumbnail(`${interaction.user.displayAvatarURL({ dynamic: true })}`)
.setDescription(`Olá ${interaction.member}, veja meus comandos de Moderação abaixo: \n\n **banidos \n continue do jeito q está...**`)
.setFooter({ text: client.user.tag, iconURL: client.user.displayAvatarURL()})

.setTimestamp()

interaction.editReply({ embeds: [mod], components: [painel], ephemeral: false })
  
         };

         if (valor === 'util') {

            let util = new Discord.MessageEmbed()
  
  .setTitle('Comandos de Util')
  .setColor('RANDOM')
  .setThumbnail(`${interaction.user.displayAvatarURL({ dynamic: true })}`)
  .setDescription(`Olá ${interaction.member}, veja meus comandos de Utilidade abaixo: \n\n **help \n id \n ping**`)
  .setFooter({ text: client.user.tag, iconURL: client.user.displayAvatarURL()})
  
  .setTimestamp()
  
  interaction.editReply({ embeds: [util], components: [painel], ephemeral: false })
    
           };


        })

    })

    }
}
