const title = "Aroshi CZ";
const email = "aroshicz@email.cz";
const rel = "img/aroshi.png";
const refsheet = "img/Aroshi-ref_sheet.jpg";
const template_folder = "templates/";
const links_icons = {
    folder: "img/",
    container : "",
    template : "icon.html",
    data : [
        {
            link: "https://discord.gg/BXq6DATg7z",
            img : "discord.png",
            alt : "Discord Server link",
            text : "Discord",
        },
        {
            link: "https://www.instagram.com/aroshi_cz/",
            img : "Instagram.png",
            alt : "Instagram link",
            text : "Instagram",
        },
        {
            link: "https://youtube.com/@aroshi_cz",
            img : "youtube.png",
            alt : "Youtube link",
            text : "Youtube",
        },
        {
            link: "https://t.me/Aroshi_CZ#",
            img : "telegram.png",
            alt : "Telegram link",
            text : "Telegram",
        }
    ]
};
const links_stream = {
    container : "",
    template : "stream.html",
    data : [
        {
            name : "Spálená Rozhledna",
            link : "https://kick.com/spalenarozhledna",
            platform : "Kick",
        },
        {
            name : "Aroshi_CZ",
            link : "https://www.twitch.tv/aroshi_cz",
            platform : "Twitch",
        }
    ]
};

const config = {
    title : title,
    email : email,
    rel : rel,
    refsheet : refsheet,
    template_folder : template_folder,
    links_icons : links_icons,
    links_stream : links_stream,
}

console.log(config);