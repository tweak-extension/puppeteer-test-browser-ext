const QUERY_TAB_OPTS = { currentWindow: true, active: true };
const E2E_QUERY_TAB_OPTS = { currentWindow: true, active: false };

const replaceBtn = document.getElementById('replace');
replaceBtn.addEventListener('click', () => {
  chrome.tabs.getCurrent(tab => {
    const isRunningExtensionOnBrowserTab = !!tab;
    const opts = isRunningExtensionOnBrowserTab ? E2E_QUERY_TAB_OPTS : QUERY_TAB_OPTS;
    const tabIndex = isRunningExtensionOnBrowserTab ? 1 : 0;

    chrome.tabs.query(opts, tabs => performReplacement(tabs[tabIndex].id));
  });
});

function performReplacement(tabId) {
  chrome.scripting.executeScript({
    target: { tabId },
    func: replaceText,
    args: [valueFrom('from'), valueFrom('to')],
  });
}

function replaceText(from, to) {
  const text = document.getElementsByClassName('text')[0];
  text.innerHTML = text.innerHTML.replace(new RegExp(from, 'gi'), to);
}

function valueFrom(id) {
  return document.getElementById(id).value;
}
