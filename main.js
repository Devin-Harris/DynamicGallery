
function ReadImages(ButtonName) {
    let items = [];
    let phpPath = "";

    switch (ButtonName) {
        case 'Logos':
            phpPath = "php/logos.php";
            break;
        case 'Illustrations':
            phpPath = "php/Illustrations.php";
            break;
        case 'Ads':
            phpPath = "php/Ads.php";
            break;
        case 'Photos':
            phpPath = "php/Photos.php";
            break;
        default:
            console.log('Error: Button not found');
    }

    //Read contents of Directory folder and save them to items array
    let httpReq = new XMLHttpRequest();

    httpReq.onload = function() {
        //console.log(JSON.parse(this.responseText));
        items = JSON.parse(this.responseText);
        galleryLoad(items, ButtonName);
    }
    httpReq.open("GET", phpPath, true);
    httpReq.send();
}


function galleryLoad(items, ButtonName) {    
    let GalleryDiv = document.querySelector('#gallery');
    let Path = "";

    for (let i = 0; i < items.length; i++) {
        if ((items[i] != "..") && (items[i] != ".")) {

            switch (ButtonName) {
                case 'Logos':
                    Path = "url(Galleries/logos/" + items[i] + ")";
                    break;
                case 'Illustrations':
                    Path = "url(Galleries/illustrations/" + items[i] + ")";
                    break;
                case 'Ads':
                    Path = "url(Galleries/ads/" + items[i] + ")";
                    break;
                case 'Photos':
                    Path = "url(Galleries/photos/" + items[i] + ")";
                    break;
                default:
                    console.log('Error: Button not found');
            }

            let NewElm = document.createElement("DIV");

            NewElm.classList.add("ImageSet");
            NewElm.style.backgroundImage = Path;

            GalleryDiv.appendChild(NewElm);
        }
    }
}

function ClearGallery() {
    let GalleryDiv = document.querySelector('#gallery');

    GalleryDiv.remove();

    let body = document.querySelector('body');
    let NewElm = document.createElement("DIV");
    NewElm.setAttribute("id", "gallery");
    body.appendChild(NewElm);

}