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
    
    
    tabMenu.forEach(function(itemMEnu, index){
        itemMEnu.addEventListener('click', function(){
            activeTab(index)
        })
      });
}
