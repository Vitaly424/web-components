const startTelephone = document.querySelector(
   ".js-telephone"
); 
// Находим нужный инпут, который хотим подвести под маску 

 const maskOptions = {
   mask: '+{7} (000) 000-00-00',
 };
IMask(startTelephone, maskOptions);
// Первым параметром указываем сам инпут, вторым опции для маски.