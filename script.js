/* scroll section active line  */

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   let top = window.scrollY;

   sections.forEach(sec => {
       let offsetTop = sec.offsetTop;
       let offsetHeight = sec.offsetHeight;
       let id = sec.getAttribute('id');

       if (top >= offsetTop && top < offsetTop + offsetHeight) {
           navlinks.forEach(link => {
               link.classList.remove('active');
               let targetLink = document.querySelector('header nav a[href*=' + id + ']');
               if (targetLink) {
                   targetLink.classList.add('active');
               }
           });
       }
   });
   
   /* sticky navbar */
   
   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 100);
   
   
   
   /* remove toggle icon and navbar when click navbar link (scroll) */
   
   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');
};


