let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let sansSerifFrontButton = document.querySelector('.font-button-sans-serif');
let serifFrontButton = document.querySelector('.font-button-serif');

darkThemeButton.onclick = function(){
    document.body.classList.add('dark');
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active');
}

lightThemeButton.onclick = function(){
    document.body.classList.remove('dark');
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
}

sansSerifFrontButton.onclick = function(){
    document.body.classList.remove('serif');
    sansSerifFrontButton.classList.add('active');
    serifFrontButton.classList.remove('active');
}

serifFrontButton.onclick = function(){
    document.body.classList.add('serif');
    sansSerifFrontButton.classList.remove('active');
    serifFrontButton.classList.add('active');
}