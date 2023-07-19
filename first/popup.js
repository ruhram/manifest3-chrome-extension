document.getElementById('exportButton').addEventListener('click', () => {
  alert("I am an alert box!");
  chrome.runtime.sendMessage({ message: 'Owalah' });
});

document.getElementById('export').addEventListener('click', () => {
  chrome.runtime.sendMessage({ message: 'click_about' });
  //alert('I am an alert box 2 !');
  /*
  const a = document.getElementsByClassName('ember-view pv3 ph4 t-16 t-bold t-black--light org-page-navigation__item-anchor ');
  if (a.length > 0){
      a[1].click()
  }
  */
  //document.getElementsByClassName('ember-view pv3 ph4 t-16 t-bold t-black--light org-page-navigation__item-anchor ')[1].click()
});
