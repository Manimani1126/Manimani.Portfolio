function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');
  
    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function() {
      closeNav()
    });
  }
  toggleNav();
  function closeNav(){
    document.body.classList.remove('nav-open');
  }

  (function () {
    const modalArea = document.getElementById('modalArea1');
    const openModal = document.getElementById('openModal1');
    const closeModal = document.getElementById('closeModal1');
    const modalBg = document.getElementById('modalBg1');
    const toggle = [openModal,closeModal,modalBg];
    
    for(let i=0, len=toggle.length ; i<len ; i++){
      toggle[i].addEventListener('click',function(){
        modalArea.classList.toggle('is-show');
      },false);
    }
  }());

  (function () {
    const modalArea = document.getElementById('modalArea2');
    const openModal = document.getElementById('openModal2');
    const closeModal = document.getElementById('closeModal2');
    const modalBg = document.getElementById('modalBg2');
    const toggle = [openModal,closeModal,modalBg];
    
    for(let i=0, len=toggle.length ; i<len ; i++){
      toggle[i].addEventListener('click',function(){
        modalArea.classList.toggle('is-show');
      },false);
    }
  }());

  (function () {
    const modalArea = document.getElementById('modalArea3');
    const openModal = document.getElementById('openModal3');
    const closeModal = document.getElementById('closeModal3');
    const modalBg = document.getElementById('modalBg3');
    const toggle = [openModal,closeModal,modalBg];
    
    for(let i=0, len=toggle.length ; i<len ; i++){
      toggle[i].addEventListener('click',function(){
        modalArea.classList.toggle('is-show');
      },false);
    }
  }());

  (function () {
    const modalArea = document.getElementById('modalArea4');
    const openModal = document.getElementById('openModal4');
    const closeModal = document.getElementById('closeModal4');
    const modalBg = document.getElementById('modalBg4');
    const toggle = [openModal,closeModal,modalBg];
    
    for(let i=0, len=toggle.length ; i<len ; i++){
      toggle[i].addEventListener('click',function(){
        modalArea.classList.toggle('is-show');
      },false);
    }
  }());
