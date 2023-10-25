function injectCSS(tab) {
  chrome.scripting
    .insertCSS({
      target: { 
        tabId: tab.id 
      },
      files: ['/fix.css'],
    });
}

function isOpenEdition(url) {
  if (url === undefined) {
    return false;
  }
  if (!url.includes('https://')) {
    return false;  
  }
  if (url.includes('openedition-org')) {
    return true;
  }
  if (url.includes('openedition.org')) {
    return true;
  }
  return false;
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    if (isOpenEdition(tab.url)) {
      injectCSS(tab);
    }  
  }
})
