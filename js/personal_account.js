$(document).ready(function() {

    let slider1 = $("#slider1");

    slider1.owlCarousel({
        items: 2,
        margin: 32,
        slideSpeed: 2500,
        nav: true,
        autoplay: false, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
    }).on('changed.owl.carousel');
});


let buttonFill = document.querySelector('.btn'),
name_p = document.querySelector('#name'),
name_input = document.querySelector('#name_input'),

surname_p = document.querySelector('#surname'),
surname_input = document.querySelector('#surname_input'),

middle_name_p = document.querySelector('#middle_name'),
middle_name_input = document.querySelector('#middle_name_input'),

series_p = document.querySelector('#series'),
series_input = document.querySelector('#series_input'),

issue_p = document.querySelector('#issue'),
issue_input = document.querySelector('#issue_input'),

gender_p = document.querySelector('#gender'),
gender_input = document.querySelector('#gender_input'),

issued_by_whom_p = document.querySelector('#issued_by_whom'),
issued_by_whom_textarea = document.querySelector('.issued_by_whom_textarea'),

issue_date_p = document.querySelector('#issue_date'),
issue_date_input = document.querySelector('#issue_date_input'),

place_of_born_p = document.querySelector('#place_of_born'),
place_of_born_input = document.querySelector('#place_of_born_input'),

data_of_born_p = document.querySelector('#data_of_born'),
data_of_born_input = document.querySelector('#data_of_born_input');

buttonFill.addEventListener('click', ()=> {
    name_p.textContent = name_input.value;
    name_input.classList.add('hide')

    surname_p.textContent = surname_input.value;
    surname_input.classList.add('hide')

    middle_name_p.textContent = middle_name_input.value;
    middle_name_input.classList.add('hide')

    series_p.textContent = series_input.value;
    series_input.classList.add('hide')

    issue_p.textContent = issue_input.value;
    issue_input.classList.add('hide')

    gender_p.textContent = gender_input.value;
    gender_input.classList.add('hide')

    issued_by_whom_p.textContent =  issued_by_whom_textarea.value;
    issued_by_whom_textarea.classList.add('hide')

    issue_date_p.textContent = issue_date_input.value;
    issue_date_input.classList.add('hide')

    place_of_born_p.textContent = place_of_born_input.value;
    place_of_born_input.classList.add('hide')

    data_of_born_p.textContent = data_of_born_input.value;
    data_of_born_input.classList.add('hide')
})