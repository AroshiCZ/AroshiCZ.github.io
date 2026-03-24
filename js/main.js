const title = "";
const email = "";
const rel = "";
const refsheet = "";
const template_folder = "../templates/";
const links_icons = {
    folder: "img/",
    container : "",
    template : "icon.html",
    data : [
        {
            link: "",
            img : "",
            alt : "",
            text : "",
        }
    ]
};
const links_stream = {
    container : "",
    template : "stream.html",
    data : [
        {
            name : "",
            link : "",
            platform : "",
        },
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