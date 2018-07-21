const doc = document;
const form = doc.querySelector('form');

function startDraw(){
    for(let i=0;i<optionsList.length;i++){
        (i==0||i==3) ? drawSelectCategory(i) : drawSelectSmallSize(i);
    }
}

function drawSelectCategory(n){
    const wrap = doc.createElement('div');
    wrap.className = 'form_category';
    form.appendChild(wrap);
    const select = doc.createElement('select');
    wrap.appendChild(select);
    for(let i=0; i<optionsList[n].length; i++){
        const option = doc.createElement('option');
        option.innerHTML = optionsList[n][i];
        select.appendChild(option);
    }
}
function drawSelectSmallSize(n){
    const wrap = doc.createElement('div');
    wrap.className = 'form_category text';
    wrap.innerHTML = optionsList[n][0];
    form.appendChild(wrap);

    const size = doc.createElement('div');
    size.className = 'form_category_size';
    wrap.appendChild(size);
    
    const select = doc.createElement('select');
    size.appendChild(select);
    for(let i=0; i<optionsList[n].length; i++){
        const option = doc.createElement('option');
        option.innerHTML = optionsList[n][i];
        select.appendChild(option);
    }
}