let darkButton = document.getElementById('btnDark');
darkButton.addEventListener('click', function(){
  if(darkButton.checked == true){
      document.body.style.backgroundColor = "black";
      document.getElementById('catalog').classList.toggle('darkCard');
      document.getElementsByTagName('nav')[0].classList.toggle('navDark');
      document.getElementsByClassName('navbar-brand')[0].style.color = "white";
      document.getElementsByClassName('navbar-toggler')[0].style.borderColor = "white";
      document.getElementsByClassName('nav-link')[0].style.color = "white";
      document.getElementsByClassName('nav-link')[1].style.color = "white";
      document.getElementsByClassName('nav-link')[2].style.color = "white";
      document.getElementsByClassName('offcanvas')[0].style.backgroundColor = "black";
      document.getElementsByClassName('offcanvas')[0].style.color = "white";
      document.getElementById('srch').style.color = "white";
      document.getElementById('srch').style.borderColor = "white";
      document.getElementById('contact').style.color = "white";
      document.getElementsByClassName('card')[1].classList.toggle('dark');
      document.getElementsByClassName('card')[2].classList.toggle('dark');
      document.getElementsByClassName('card')[3].classList.toggle('dark');
      document.getElementById('btnsubmit').style.backgroundColor = "grey";
      document.getElementById('btnsubmit').style.borderColor = "grey";
  }else if(darkButton.checked == false){
      document.body.style.removeProperty('background-color');
      document.getElementById('catalog').classList.remove('darkCard');
      document.getElementsByTagName('nav')[0].classList.remove('navDark');
      document.getElementsByClassName('navbar-brand')[0].style.removeProperty('color');
      document.getElementsByClassName('navbar-toggler')[0].style.removeProperty('border-color');
      document.getElementsByClassName('nav-link')[0].style.removeProperty('color')
      document.getElementsByClassName('nav-link')[1].style.removeProperty('color');
      document.getElementsByClassName('nav-link')[2].style.removeProperty('color')
      document.getElementsByClassName('offcanvas')[0].style.removeProperty('background-color');
      document.getElementsByClassName('offcanvas')[0].style.removeProperty('color');
      document.getElementById('srch').style.removeProperty('color');
      document.getElementById('srch').style.removeProperty('border-color');
      document.getElementById('contact').style.removeProperty('color');
      document.getElementsByClassName('card')[1].classList.remove('dark');
      document.getElementsByClassName('card')[2].classList.remove('dark');
      document.getElementsByClassName('card')[3].classList.remove('dark');
      document.getElementById('btnsubmit').style.removeProperty('background-color');
      document.getElementById('btnsubmit').style.removeProperty('border-color');
  }
});
