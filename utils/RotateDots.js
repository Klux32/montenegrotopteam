export const RotateDots = (elementId, speed) => {
    const element = document.getElementById(elementId);
    let countDeg = 1;
    let count;

    clearInterval(count)


     count = setInterval(()=>{

            countDeg += 1
        element.style.transform=`translate(-50%, -50%) rotateZ(${countDeg}deg)`
    },speed);

}