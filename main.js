const toggleBtn= document.querySelector('.toggle_btn')
const toggleBtnIcon= document.querySelector('.toggle_btn i')
const dropDown_Menu= document.querySelector('.dropdown_menu')


toggleBtn.Oneclick= function(){
dropDown_Menu.ClassList.toggle('open')
const isOpen= dropDown_Menu.ClassList.contains('open')
toggleBtnIcon.ClassList= isOpen
      ? 'fa-solid fa-mark'
      :'fa-solid fa-bars'
   
}