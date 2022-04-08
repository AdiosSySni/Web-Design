function show(option) {
    document.querySelector('.textBox').value = option;
}

let dropdown = document.querySelector('.dropdown')
    dropdown.onclick = ()=> {
        dropdown.classList.toggle('active');
}


let bookmark = document.querySelectorAll('#bookmark');
    bookmark.forEach((item)=> {
        item.addEventListener('click', ()=> {
            if(item.classList.contains("filled")) {
                 item.src = "../img/catalog/bookmark.png"
                 item.classList.remove('filled');
            }
            else {
                item.classList.add("filled")
                item.src = "../img/catalog/bookmark-filled.png"
            }
        })
})




// Фильтр работающий
let cards = document.querySelectorAll('.card')

function app() {
    let buttons = document.querySelectorAll('.course')
 

    function filter(category, items) {
        items.forEach((item)=> {
            let isItemFiltered = !item.classList.contains(category)
            let isShowAll = category.toLowerCase() === 'all';

            if(isItemFiltered && !isShowAll) item.classList.add('hide')
            else item.classList.remove('hide')
        })
    }
    
    buttons.forEach((elem)=> {
        elem.addEventListener('click', ()=> {
            let currentCategory = elem.dataset.filter
            filter(currentCategory,cards)
        })
    })
}

app();

// Поиск не работающий

// function searchApp() {
//     let infoText = document.querySelectorAll('#info-heading')
//     let submit = document.querySelector('.submit-search')
//     let input = document.querySelector('.input')

    
   
//     function search(text, info) {
//         info.forEach((elem)=>{
//             // if(text === 'Holiday Cottage') {
//             //    console.log(true);
//                 console.log(elem);
//             // }
//         })
//     }

//     submit.addEventListener('click', ()=> {
//         let inputText = input.value;
//         search(inputText, infoText)
//     })
// }

// searchApp() 