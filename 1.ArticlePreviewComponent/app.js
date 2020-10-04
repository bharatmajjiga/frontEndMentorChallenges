//selectors
const shareBtn = document.querySelector(".share-btn");
const tooltipElem = document.querySelector("[data-toggle='tooltip']");

//Event Listeners
shareBtn.addEventListener('click', showTooltip);

//functions
function showTooltip() {

    const state = tooltipElem.getAttribute('data-disabled');
    if(state === 'true') {
        tooltipElem.style.display = "flex";
        tooltipElem.setAttribute('data-disabled', false);
    }
    else {
        tooltipElem.style.display = "none";
        tooltipElem.setAttribute('data-disabled', true);
    }
}