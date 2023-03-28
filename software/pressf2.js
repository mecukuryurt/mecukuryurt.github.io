document.addEventListener('keydown', logkey);

function logkey(e) 
{
    if (e.code == "F2")
    {
        console.log("F2 pressed");
        window.open('https://bun.filedit.ch/uzdoSioDSwBmWAAPmUx.mp3');
    }

} 