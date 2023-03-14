function removeElements(selector) {
   let elements = document.querySelectorAll(selector);
   elements.forEach(element => element.remove());
 }
 
 function modifyPaywallStyle() {
   let element = document.querySelector('div.article-full__body-content.article-paywall');
   if (element) {
     element.style.maxHeight = '5000rem';
   }
 }
 
 modifyPaywallStyle();
 removeElements('div.paywall');
 removeElements('div.subscription-block');
 removeElements('div.aside__item.aside-newspaper');
 removeElements('a.navbar-top__nav-btn.btn.btn--sub');
 
 