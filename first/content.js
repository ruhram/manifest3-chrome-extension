chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'Hello') {
      chrome.action.setPopup({ popup: 'popup.html' });
    }
    if (request.message === 'click_about'){
        document.getElementsByClassName('ember-view pv3 ph4 t-16 t-bold t-black--light org-page-navigation__item-anchor ')[1].click()
    }
  });