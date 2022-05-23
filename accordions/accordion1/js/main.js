const myAccardion = new HandyCollapse({
   nameSpace: "hc",
   activeClass: "is-active",
   closeOthers: true,
   // isAnimation: true,
   onSlideStart: (isOpen, contentID) => {
       console.log(isOpen);
      let buttonEl = document.querySelector(`[data-hc-control='${contentID}']`);
       const btns = document.querySelectorAll('[data-hc-control]');
       
      btns.forEach(btn => {
         btn.textContent = "Открыть";
      });

      //  if (!buttonEl) return;
       if (isOpen) {
           buttonEl.textContent = "Закрыть";
       } else {
           buttonEl.textContent = "Открыть";
       }
   }
});

 