document.addEventListener('DOMContentLoaded', function(){

    const fixedImgHeight = 518.400;
    const fixedImgwidth = 407.350;

    const fixedFrameWidth = 1024;
    const fixedFrameHeight = 1366;

    // Get frame width
    const frameWidth = window.innerWidth;
    const frameHeight = window.innerHeight;

    // console.log(window.outerWidth);
    // console.log(window.innerWidth);

    // Laptop
    if(Number(frameWidth) === 1536 && Number(frameHeight) === 701.60){
        console.log("here");
    }

    if(Number(frameWidth) <= 1024){

        document.querySelector('.exclamation').remove();
        document.querySelector('.intro').textContent = 'Harshit Raj Sinha';

        const photoContainer = document.getElementById('my-photo');
        photoContainer.style.height = String((frameHeight/fixedFrameHeight) * fixedImgHeight) + 'px';
        photoContainer.style.width = String((frameWidth/fixedFrameWidth) * fixedImgwidth) + 'px';
        console.log(frameHeight);
        console.log(fixedFrameHeight);
        console.log(fixedImgHeight);



    }
    // console.log(frameWidth)
})