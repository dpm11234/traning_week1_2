function handleClick() {
   let conversationArea = document.querySelector('div.conversation_area');
   let chatArea = document.querySelector('div.chat_area');

   if(screen.width <= 568) {
      conversationArea.setAttribute('style', 'display:none !important');
      chatArea.setAttribute('style', 'display:flex !important');
   }
}

function clickBack() {
   let conversationArea = document.querySelector('div.conversation_area');
   let chatArea = document.querySelector('div.chat_area');
   
   if(screen.width < 568) {
      conversationArea.setAttribute('style', 'display:flex !important');
      chatArea.setAttribute('style', 'display:none !important');
   }
   
}

function toggle() {
   let navbarRight = document.querySelector('.navbar_right');
   let sidebarCollapse = document.querySelector('.sidebar_collapse');

   navbarRight.classList.toggle('toggle_navbar_right');
   sidebarCollapse.classList.toggle('toggle-sidebar_collapse');
}

