const Discord = require("discord.js")
const config = require("./config.json")
const client = new Discord.Client(
    { intents: 32767 }

)

client.login("MTA4MTI2MzYzNjEzNzM5ODM5NA.GPuLqh.ahkm62LNdN06k4G16y2si7KRoXWhWTO0bjHj6s")

client.on("ready", async () => {
    console.log("Bot ONLINE")
  client.user.setActivity(
        activity = {
            name: 'ESAME',
            type: 'STREAMING',
            url: 'https://www.youtube.com/watch?v=SfLJh5LYoTs'
        })
       
    let data = [
        {
            name: "prenota",
            description: "Prenota per il tuo esame",
            options: [ 
                { 
                    name: "nome-recluta", 
                    description: "Nome prenotante",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "cognome-recluta", 
                    description: "Cognome prenotante",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "orario", 
                    description: "Orario della prenotazione",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "data", 
                    description: "Data della prenotazione",
                    type: "STRING",
                    required: true
                }
            ]
        },

         {
            name: "esame", 
            description: "il tuo esame",
            options: [
                { 
                    name: "nome-esaminatore", 
                    description: "nome dell'esaminatore",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "nome-recluta ", 
                    description: "nome del prenotante",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "cognome-recluta", 
                    description: "cognome della prenotazione",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "orario", 
                    description: "orario della prenotazione",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "data", 
                    description: "data della prenotazione",
                    type: "STRING",
                    required: true
                }
            ]
        },
        
        {
            name: "risultatoesame", 
            description: "Risultato Esame Agente",
            options: [
                { 
                    name: "nome-esaminatore", 
                    description: "nome dell'esaminatore",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "nome-recluta ", 
                    description: "nome del prenotante",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "cognome-recluta", 
                    description: "cognome della prenotazione",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "orario", 
                    description: "orario della prenotazione",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "data", 
                    description: "data della prenotazione",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "matricola", 
                    description: "Matricola e Utilizzo",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "rilascio-documenti", 
                    description: "Rilascio Documenti",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "portoarmi-taser", 
                    description: "Rilascio Porto Armi e Taser",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "fedina-penale", 
                    description: "Compilazione Fedina Penale",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "reati-cap", 
                    description: "Reati CAP",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "domanda-logica", 
                    description: "Domanda Logica",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "panic-rapimento", 
                    description: "Panic Button e Rapimento Agente",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "operativa-codici", 
                    description: "Operativa 21 e Codici Radio",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "miranda-warning", 
                    description: "Miranda Warning",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "arresto-fermo-diff", 
                    description: "Differenza Stato Arresto/Fermo",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "perquisizione", 
                    description: "Protocolli Perquisizione",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "perquisizione-abit", 
                    description: "Perquisizione Abitazioni",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "contr-rapina", 
                    description: "Contrattazione e Rapina",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "manovre-veicolari", 
                    description: "Manovre Veicolari",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "simul-fermo", 
                    description: "Simulazione Fermo Stradale",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "comportamento", 
                    description: "Comportamento",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "ragionamento", 
                    description: "Ragionamento",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "linguaggio", 
                    description: "Linguaggio",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "media", 
                    description: "Media",
                    type: "STRING",
                    required: true
                }
            ]
        },
        {
            name: "rapportorecluta", 
            description: "Rapporto Recluta",
            options: [
                { 
                    name: "nome-recluta", 
                    description: "nome della recluta",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "procedure", 
                    description: "voto procedure",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "codici-radio", 
                    description: "Voto codici radio",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "punti-positivi", 
                    description: "descrizione punti positivi della recluta",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "punti-negativi", 
                    description: "escrizione punti negativi della recluta",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "come-potrebbe-migliorare", 
                    description: "descrivi brevemente in che campi potrebbe migliorare",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "comportamento", 
                    description: "descrivi brevemente il comportamento della recluta",
                    type: "STRING",
                    required: true
                },
                { 
                    name: "note", 
                    description: "Note che vorresti lasciare sulla recluta",
                    type: "STRING",
                    required: true
                }
            ] 
        }
    ]

    await client.application?.commands.set(data)
})

client.on("interactionCreate", async interaction => {
    if (!interaction.isCommand()) return

    if (interaction.commandName == "prenota") {
        const nome = interaction.options.getString("nome-recluta")
        const cognome = interaction.options.getString("cognome-recluta")
        const orario = interaction.options.getString("orario")
        const data = interaction.options.getString("data")

        var canale = client.channels.cache.get("1071395558675202128")
        await canale.send("<@&1010578716109316173>")

        const prenotazione = new Discord.MessageEmbed()
            .setTitle("PRENOTAZIONE ESAME")
            .setDescription("**✅=Se si è presenti       ❌=Se non si è presenti**")
            .addFields({ name: 'Nickname Discord', value: `${interaction.member}`, inline: false })
            .addFields({ name: 'Nome Recluta', value: `${nome}`, inline: false })
            .addFields({ name: 'Cognome Recluta', value: `${cognome}`, inline: false })
            .addFields({ name: 'Orario', value: `${orario}`, inline: false })
            .addFields({ name: 'Data Esame', value: `${data}`, inline: false })
            .setTimestamp()
            .setColor("#ff69b4")
            .setFooter({ text: '© Risorse Umane 2023 🂱', iconURL: 'https://cdn.discordapp.com/icons/1010578716109316167/99ae90331cdd313ba37d74f0caccf9b7.webp?size=1024' })
            
        
        canale.send({ embeds: [prenotazione] }).then(i => {
            /**
             * @param {BaseInteraction} i
             */
            i.react("✅")
            i.react("❌")
        })

        const risp2 = new Discord.MessageEmbed()
        .setTitle( `Fantastico! `)
        .setDescription(`${interaction.member} **Prenotazione avvenuta con successo!** <:okay:1057099928217862225> \n  \n Attendi che un esaminatore ti fissi la prenotazione la troverai in <#1015256162716876831>`)
        .setTimestamp()
        .setColor("#ff69b4")
        .setFooter({ text: '© Risorse Umane 2023 🂱', iconURL: 'https://cdn.discordapp.com/icons/1010578716109316167/99ae90331cdd313ba37d74f0caccf9b7.webp?size=1024' })
        interaction.reply({ embeds: [risp2], ephemeral: true });
    }  
});


client.on("interactionCreate", async interaction => {
if (!interaction.isCommand()) return

if (interaction.commandName == "esame") {
    const nomeesaminatore = interaction.options.getString("nome-esaminatore")
    const nomerecluta = interaction.options.getString("nome-recluta")
    const cognomerecluta = interaction.options.getString("cognome-recluta")
    const orario = interaction.options.getString("orario")
    const data = interaction.options.getString("data")

    var canale = client.channels.cache.get("1015256162716876831")
    await canale.send("<@&966105623643177057>")
    await canale.send("<@&966105623576068123>")

    const prenotazione = new Discord.MessageEmbed()
        .setTitle("ESAME RECLUTA")
        .setDescription("**ESAME FISSATO DA:**")
        .addFields({ name: 'Discord Nickname', value: `${interaction.member}`, inline: false })
        .addFields({ name: 'Esaminatore/i', value: `${nomeesaminatore}`, inline: false })
        .addFields({ name: 'Nome Recluta', value: `${nomerecluta}`, inline: false })
        .addFields({ name: 'Cognome Recluta', value: `${cognomerecluta}`, inline: false })
        .addFields({ name: 'Orario', value: `${orario}`, inline: false })
        .addFields({ name: 'Data Esame', value: `${data}`, inline: false })
        .setTimestamp()
        .setColor("#ff69b4")
        .setFooter({ text: '© Risorse Umane 2023 🂱', iconURL: 'https://cdn.discordapp.com/icons/1010578716109316167/99ae90331cdd313ba37d74f0caccf9b7.webp?size=1024' })
        
    
    canale.send({ embeds: [prenotazione]})
    const risp1 = new Discord.MessageEmbed()
    .setTitle( `Caro/a`)
    .setDescription (`${interaction.member} \n **Hai fissato un esame con successo!** <:okay:1057099928217862225> \n \n Riscalda la tabella delle domande! <:fuoco:1057101965118677143>`)
    .setTimestamp()
    .setColor("#ff69b4")
    .setFooter({ text: '© Risorse Umane 2023 🂱', iconURL: 'https://cdn.discordapp.com/icons/1010578716109316167/99ae90331cdd313ba37d74f0caccf9b7.webp?size=1024' })
    interaction.reply({ embeds: [risp1], ephemeral: true });
}
})

client.on("interactionCreate", async interaction => {
    if (!interaction.isCommand()) return
    
    if (interaction.commandName == "risultatoesame") {
        const nomeesaminatore = interaction.options.getString("nome-esaminatore")
        const nomerecluta = interaction.options.getString("nome-recluta")
        const cognomerecluta = interaction.options.getString("cognome-recluta")
        const orario = interaction.options.getString("orario")
        const data = interaction.options.getString("data")
        const matricola = interaction.options.getString("matricola")
        const rilasciodocumenti = interaction.options.getString("rilascio-documenti")
        const portoarmitaser = interaction.options.getString("portoarmi-taser")
        const fedinapenale = interaction.options.getString("fedina-penale")
        const reaticap = interaction.options.getString("reati-cap")
        const domandalogica = interaction.options.getString("domanda-logica")
        const panicrapimento = interaction.options.getString("panic-rapimento")
        const operativacodici = interaction.options.getString("operativa-codici")
        const mirandawarning = interaction.options.getString("miranda-warning")
        const arrestofermodiff = interaction.options.getString("arresto-fermo-diff")
        const perquisizione = interaction.options.getString("perquisizione")
        const perquisizioneabit = interaction.options.getString("perquisizione-abit")
        const contrrapina = interaction.options.getString("contr-rapina")
        const manovreveicolari = interaction.options.getString("manovre-veicolari")
        const simulfermo = interaction.options.getString("simul-fermo")
        const comportamento = interaction.options.getString("comportamento")
        const ragionamento = interaction.options.getString("ragionamento")
        const linguaggio = interaction.options.getString("linguaggio")
        const media = interaction.options.getString("media")

    
        var canale = client.channels.cache.get("1010578718118395908") 
        var canalearchivio = client.channels.cache.get("1010578718118395909")
        const risultatoesame = new Discord.MessageEmbed()
            .setTitle("RISULTATO ESAME RECLUTA")
            .setDescription("**VOTAZIONI ESAME:**")
            .addFields({ name: 'Discord Nickname :', value: `${interaction.member}`, inline: false })
            .addFields({ name: 'Esaminatore/i :', value: `${nomeesaminatore}`, inline: false })
            .addFields({ name: 'Nome Recluta :', value: `${nomerecluta}`, inline: false })
            .addFields({ name: 'Cognome Recluta :', value: `${cognomerecluta}`, inline: false })
            .addFields({ name: 'Orario :', value: `${orario}`, inline: false })
            .addFields({ name: 'Data Esame :', value: `${data}`, inline: false })
            .addFields({ name: 'Matricola e Utilizzo :', value: `${matricola}`, inline: false })
            .addFields({ name: 'Rilascio Documenti :', value: `${rilasciodocumenti}`, inline: false })
            .addFields({ name: 'Rilascio Porto Armi e Taser :', value: `${portoarmitaser}`, inline: false })
            .addFields({ name: 'Compilazione Fedina Penale :', value: `${fedinapenale}`, inline: false })
            .addFields({ name: 'Reati CAP :', value: `${reaticap}`, inline: false })
            .addFields({ name: 'Domanda Logica :', value: `${domandalogica}`, inline: false })
            .addFields({ name: 'Panic Button e Rapimento Agente :', value: `${panicrapimento}`, inline: false })
            .addFields({ name: 'Operativa 21 e Codici Radio :', value: `${operativacodici}`, inline: false })
            .addFields({ name: 'Miranda Warning :', value: `${mirandawarning}`, inline: false })
            .addFields({ name: 'Differenza Stato Arresto/Fermo :', value: `${arrestofermodiff}`, inline: false })
            .addFields({ name: 'Protocolli Perquisizione :', value: `${perquisizione}`, inline: false })
            .addFields({ name: 'Perquisizione Abitazioni :', value: `${perquisizioneabit}`, inline: false })
            .addFields({ name: 'Contrattazione e Rapina :', value: `${contrrapina}`, inline: false })
            .addFields({ name: 'Manovre Veicolari :', value: `${manovreveicolari}`, inline: false })
            .addFields({ name: 'Simulazione Fermo Stradale :', value: `${simulfermo}`, inline: false })
            .addFields({ name: 'Comportamento :', value: `${comportamento}`, inline: false })
            .addFields({ name: 'Ragionamento :', value: `${ragionamento}`, inline: false })
            .addFields({ name: 'Linguaggio :', value: `${linguaggio}`, inline: false })
            .addFields({ name: 'Media :', value: `${media}`, inline: false })
            .setColor("#ff69b4")
            .setTimestamp()
            .setFooter({ text: '© Risorse Umane 2023 🂱', iconURL: 'https://cdn.discordapp.com/icons/1010578716109316167/99ae90331cdd313ba37d74f0caccf9b7.webp?size=1024' })
            
        
        canale.send({ embeds: [risultatoesame]});
        canalearchivio.send({ embeds: [risultatoesame]})

        const risp = new Discord.MessageEmbed()
        .setTitle( `Carissimo/a`)
        .setDescription (`${interaction.member} **OTTIMO LAVORO!** \n \n *Risultato Esame pubblicato con successo* <:okay:1057099928217862225>`)
        .setColor("#ff69b4")
        .setTimestamp()
        .setFooter({ text: '© Risorse Umane 2023 🂱', iconURL: 'https://cdn.discordapp.com/icons/1010578716109316167/99ae90331cdd313ba37d74f0caccf9b7.webp?size=1024' })
        interaction.reply({ embeds: [risp], ephemeral: true });
    }
})

    client.on("interactionCreate", async interaction => {
        if (!interaction.isCommand()) return
        
        if (interaction.commandName == "rapportorecluta") {
            const nomerecluta1 = interaction.options.getString("nome-recluta")
            const procedure1 = interaction.options.getString("procedure")
            const codiciradio1 = interaction.options.getString("codici-radio")
            const puntipositivi1 = interaction.options.getString("punti-positivi")
            const puntinegativi1 = interaction.options.getString("punti-negativi")
            const migliorare1 = interaction.options.getString("come-potrebbe-migliorare")
            const comportamento1 = interaction.options.getString("comportamento")
            const note1 = interaction.options.getString("note")
    
        
            var channelrapport = client.channels.cache.get("1070997411532652575") 
            
            const rapport = new Discord.MessageEmbed()
                .setTitle("RAPPORTO RECLUTA")
                .setDescription("**ECCO I RISULTATI RIPORTATI DA:**")
                .addFields({ name: 'Inviato da :', value: `${interaction.member.nickname}`, inline: false })
                .addFields({ name: 'Recluta :', value: `${nomerecluta1}`, inline: false })
                .addFields({ name: 'procedure :', value: `${procedure1}`, inline: false })
                .addFields({ name: 'Codici Radio :', value: `${codiciradio1}`, inline: false })
                .addFields({ name: 'Punti positivi :', value: `${puntipositivi1}`, inline: false })
                .addFields({ name: 'Punti negativi :', value: `${puntinegativi1}`, inline: false })
                .addFields({ name: 'Come potrebbe migliorare :', value: `${migliorare1}`, inline: false })
                .addFields({ name: 'Comportamento :', value: `${comportamento1}`, inline: false })
                .addFields({ name: 'Note :', value: `${note1}`, inline: false })
                .setColor("#ff69b4")
                .setTimestamp()
                .setFooter({ text: '© Risorse Umane 2023 🂱', iconURL: 'https://cdn.discordapp.com/icons/1010578716109316167/99ae90331cdd313ba37d74f0caccf9b7.webp?size=1024' })
                
            
             channelrapport.send({ embeds: [rapport]})
           
    
            const risp6 = new Discord.MessageEmbed()
            .setTitle( `Carissimo/a`)
            .setDescription (`${interaction.member} **OTTIMO LAVORO!** \n \n *Rapporto recluta mandato con successo* <:okay:1057099928217862225>`)
            .setColor("#ff69b4")
            .setTimestamp()
            .setFooter({ text: '© Risorse Umane 2023 🂱', iconURL: 'https://cdn.discordapp.com/icons/1010578716109316167/99ae90331cdd313ba37d74f0caccf9b7.webp?size=1024' })
            interaction.reply({ embeds: [risp6], ephemeral: true })
        }
        client.on('guildMemberAdd', (member) => {

            const channel = client.channels.cache.get("1010578716176429078")
        
            const benvenuto = new Discord.EmbedBuilder() 
            .setColor(0x0099FF)
            .setTitle("BENVENUTO NEL DIPARTIMENTO DI ℣ANQUEST - Risorse Umane")
            .setDescription(`<@${member.user.id}> \n **Appena entrato avrai le <@&1010578716159647744> o <@&1010578716155453590> che ti direzioneranno in continuo dovrai visionare le stanze richieste qui segnate: \n 1- <#1010578717044641806> \n 2- <#1010578716851708073> \n 3- <#1071240987059441794>*`)
            .setTimestamp()
            .setFooter({ text: 'Vanquest LSPD', iconURL: 'https://cdn.discordapp.com/attachments/1055634259060215938/1071131726409125948/Senza_titolo-6.png' })
            .setThumbnail('https://cdn.discordapp.com/attachments/1055634259060215938/1071131726409125948/Senza_titolo-6.png')
            .addFields(
                { name: 'Regole Fondamentali', value: 'Che pretendiamo nelle risorse umane!' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Rispetto di chiunque', value: 'Sia gradi alti che bassi.', inline: true },
                { name: 'Professionalità!', value: 'Ti devi divertire ma attenendoti alle linee guida rp della polizia e del reparto.', inline: true },
            )
            channel.send({ embeds: [benvenuto] })
        })
    })

