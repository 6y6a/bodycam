$(document).ready(function () {
   var $menu, $menuToggle, $menuList;

   $menu = $('.menu');
   $menuToggle = $menu.find('.menu__toggle');

   $menuToggle.on('click', function () {
       $(this).parents('.menu').find('.menu__list').toggleClass('menu__list--active');
   })


});