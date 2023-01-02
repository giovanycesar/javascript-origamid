function initTabNav() {

const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

if (tabContent && tabMenu) {
    tabContent[0].classList.add('ativo')

    function activeTab(index) {
        tabContent.forEach(function(section){
            section.classList.remove('ativo')
          });
        tabContent[index].classList.add('ativo')
    }
    
    
    tabMenu.forEach(function(itemMenu, index){
        itemMenu.addEventListener('click', function(){
            activeTab(index)
        })
      });
}

}

initTabNav();

function initAccordion() {

const accordionList = document.querySelectorAll('.js-accordion dt')
const ativeClass = 'ativo'


if (accordionList) { 
accordionList[0].classList.toggle(ativeClass)
accordionList[0].nextElementSibling.classList.toggle(ativeClass)


function activeAccordion() {
    this.classList.toggle(ativeClass)
    this.nextElementSibling.classList.toggle(ativeClass)
}

accordionList.forEach(function(item){
    item.addEventListener('click', activeAccordion)
});

}
}

initAccordion()