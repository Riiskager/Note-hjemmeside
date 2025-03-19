const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
    isDragging = true;
    track.style.transition = "none";
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
    isDragging = false;
}

window.onmousemove = e => {
    if(!isDragging || track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
        let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
        
        nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);   
    
    track.dataset.percentage= nextPercentage;

    track.animate({transform: `translate(${nextPercentage}%, -50%)`
    }, {duration: 1200, fill: "forwards"});
    
    for(const image of track.getElementsByClassName("image")) {
    image.style.objectPosition = `${nextPercentage + 100}% 50%`;
}
}
