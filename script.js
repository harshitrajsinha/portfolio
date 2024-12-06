document.addEventListener('DOMContentLoaded', function(){

    const fixedImgHeight = 518.400;
    const fixedImgwidth = 407.350;

    const fixedFrameWidth = 1024;
    const fixedFrameHeight = 1366;

    // Get frame width
    const frameWidth = window.innerWidth;
    const frameHeight = window.innerHeight;
    // change content if frame <= 1024px
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