const SERVER_IP = "play.victuzmc.es"
const SERVER_PORT = "25565" // Leave it blank if the port is already 25565

const DISCORD_WIDGET_ID = "907688178419384411" // If it doesn't work be sure that you have enabled the widget in your discord server
const DISCORD_INVITE_LINK = "https://discord.gg/g9m6bxRkEB"

$.getJSON(`https://api.minetools.eu/ping/${SERVER_IP}/${SERVER_PORT}`,function(e){let t=e.players.online;$(".player-count").html(((t=t.toString().split("."))[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")))}),$.get(`https://discordapp.com/api/guilds/${DISCORD_WIDGET_ID}/embed.json`,function(e){let t=e.presence_count;$("#discord-count").html(((t=t.toString().split("."))[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")))}),$(".discord-widget").click(function(){window.location=`${DISCORD_INVITE_LINK}`}),$(".minecraft-widget").click(function(){swal({title:`${SERVER_IP}`,text:"Esperamos verte pronto.",button:"OK",timer:5e3}),document.getElementById("ipServer").select(),document.execCommand("copy")});

function changeIframeLink(iframe, url) {
    $(iframe).attr("src", url)
}

$('.vote__iframe').on('load', function(){
    $('.body__desc').addClass("iframe__loaded")
});

$(".vote__link").on("click", function(event){
    
    event.stopPropagation()

    $(".body__desc").removeClass("iframe__loaded")

    $(".vote__link").removeClass("active-link")
    
    let voteLink = $(this).attr("data_vote_link")
    let iframe = $(".vote__iframe")
    let iframeValue = $(iframe).attr("src")

    $(this).addClass("active-link")

    if (voteLink == iframeValue) {
        console.error("SAME LINK CLICKED, ABORDING CHANGING")
    } else {
        changeIframeLink(iframe, voteLink)
    }
    
})
