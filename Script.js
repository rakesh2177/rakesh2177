const imgs = document.querySelectorAll('.hader-slider ul img');
const prev_btn = document.querySelectorAll('.control_prev');
const next_btn = document.querySelectorAll('.control_next');

let n = 0;

function changeslide(){
    for (let i = 0; i < imgs.length; i++){
            imgs[i].Style.display = 'none';
    }
    imgs[n].Style.display = 'block';
}
changeslide();