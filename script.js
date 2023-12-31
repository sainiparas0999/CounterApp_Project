const countValue = document.getElementById('counter');

function increment(){
    let value = parseInt(countValue.innerHTML);
    value = value +1 ;
    countValue.innerHTML = value ;
}

function decrement(){

    let value = parseInt(countValue.innerHTML);
    value = value -1 ;
    countValue.innerHTML = value ;

}


