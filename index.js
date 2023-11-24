const ratings = document.querySelector('.rates');
const rateBtn = document.querySelectorAll('.rate-btn');
const submitBtn = document.querySelector('.submit-btn');
const result = document.querySelector('.selected-rate');
const thanksPage = document.querySelector('.thanks-page');
let activeStatus;

ratings.addEventListener('click', e => {
    rateBtn.forEach(btn => {
        btn.classList.remove('active')
    })
    e.target.classList.add('active');
    activeStatus = e.target.innerHTML;
})

submitBtn.addEventListener('click', () => {
    if(activeStatus > 0 || activeStatus <= 5) {
        thanksPage.style.bottom = '0%';

        result.textContent = `You selected ${activeStatus} out of 5`
    }
    else {
        return false
    }
})