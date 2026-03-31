const title = "Aroshi CZ";
const email = "aroshicz@email.cz";
const rel = "img/aroshi.png";
const refsheet = "img/Aroshi-ref_sheet.jpg";
const template_folder = "templates/";
const debugLogs = false;
const links_icons = {
    folder: "img/",
    container : "links_container",
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
    container : "stream_ul",
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

if (debugLogs) {
    console.log(typeof(links_stream));
}

function checkDataset(dataset, requiredKeys) {
    for (const key of requiredKeys) {
        if (!(key in dataset)) {
            if (debugLogs) {
                console.log(`error: missing key ${key}`);
            }
            return false;
        }
    }
    return true;
}

async function renderStreams(links) {
    if (typeof(links) !== "object"){
        if (debugLogs) {
            console.log("error with streams")
        }
        return;
    }
    if (debugLogs) {
        console.log(links);
    }
    const stream_keys = ["container", "template", "data"];
    if (!checkDataset(links, stream_keys)) {
        if (debugLogs) {
            console.log("error with streams: missing keys");
        }
        return;
    }
    const stream_datakeys = ["name", "link", "platform"];
    for (const stream of links.data) {
        if (!checkDataset(stream, stream_datakeys)) {
            if (debugLogs) {
                console.log("error with streams: missing keys in data");
            }
            return;
        }
    } 

    const container = document.getElementById(links.container);
    if (!container) {
        if (debugLogs) {
            console.log(`error with streams: container with id ${links.container} not found`);
        }
        return;
    }
    const template = await fetch(config.template_folder + links.template).then(response => {
        if (!response.ok) {
            if (debugLogs) {
                console.log(`error with streams: template ${links.template} not found`);
            }
            return null;
        }        return response.text();
    }).catch(error => {
        if (debugLogs) {
            console.log(`error with streams: template ${links.template} not found`);
        }
        return null;
    });
    if (debugLogs) {
        console.log(template);
    }

    for (const stream of links.data) {
        // ... validate stream keys ...

        let html = template; 
        html = html.replace(/{{username}}/g, stream.name);
        html = html.replace(/{{link}}/g, stream.link);
        html = html.replace(/{{platform}}/g, stream.platform);

        const temp = document.createElement("template");
        temp.innerHTML = html.trim();
        container.appendChild(temp.content.firstElementChild);
    }
}

async function renderLinks(links) {
    if (typeof(links) !== "object"){
        if (debugLogs) {
            console.log("error with links")
        }
        return;
    }
    if (debugLogs) {
        console.log(links);
    }
    const links_keys = ["folder", "container", "template", "data"];
    if (!checkDataset(links, links_keys)) {
        if (debugLogs) {
            console.log("error with links: missing keys");
        }
        return;
    }
    const links_datakeys = ["link", "img", "alt", "text"];
    for (const link of links.data) {
        if (!checkDataset(link, links_datakeys)) {
            if (debugLogs) {
                console.log("error with links: missing keys in data");
            }
            return;
        }
    }
    const container = document.getElementById(links.container);
    if (!container) {
        if (debugLogs) {
            console.log(`error with links: container with id ${links.container} not found`);
        }
        return;
    }
    const template = await fetch(config.template_folder + links.template).then(response => {
        if (!response.ok) {
            if (debugLogs) {
                console.log(`error with links: template ${links.template} not found`);
            }
            return null;
        }        
        return response.text();
    });
    if (debugLogs) {
        console.log(template);
    }
    for (const link of links.data) {
        let html = template;
        const classname = link.text.toLowerCase();
        html = html.replace(/{{classname}}/g, classname);
        html = html.replace(/{{link}}/g, link.link);
        html = html.replace(/{{img}}/g, links.folder + link.img);
        html = html.replace(/{{alt}}/g, link.alt);
        html = html.replace(/{{text}}/g, link.text);
        const temp = document.createElement("template");
        temp.innerHTML = html.trim();
        container.appendChild(temp.content.firstElementChild);
    }

    
}

document.title = config.title;
renderLinks(config.links_icons);
renderStreams(config.links_stream);