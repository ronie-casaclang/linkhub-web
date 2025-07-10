
// create link element
function loadLinks(itemId, imgSrc, linkName, linkURL){
    var linkbox = document.createElement('div');
    linkbox.classList.add('linkbox');
    linkbox.title = linkURL;

    var icon = document.createElement('img');
    icon.src = getIcon(imgSrc);

    var key = document.createElement('input');
    key.value = itemId;
    key.style.display = 'none';

    var name = document.createElement('p');
    name.innerText = linkName;

    var link = document.createElement('span');
    link.innerText = linkURL;

    linkbox.appendChild(icon);
    linkbox.appendChild(name);
    linkbox.appendChild(key);
    linkbox.appendChild(link);

    var linksContainer = document.querySelector('.link-main');
    linksContainer.appendChild(linkbox);
    
    linkbox.addEventListener('click', function(){
        //displayDialog(itemId, imgSrc, linkName, linkURL);
        alert('Edit: ' + itemId);
    });
}

// get icon img source
function getIcon(keyword){
    switch(keyword.toLowerCase()){
        case 'facebook': return 'images/icons/facebook.png';
        case 'youtube': return 'images/icons/youtube.png';
        case 'google': return 'images/icons/google.png';
        case 'linkedin': return 'images/icons/linkedin.png';
        case 'microsoft': return 'images/icons/microsoft.png';
        case 'github': return 'images/icons/github.png';
        case 'figma': return 'images/icons/figma.png';
        case 'instagram': return 'images/icons/instagram.png';
        default: return 'images/icons/link.png';
    }
}