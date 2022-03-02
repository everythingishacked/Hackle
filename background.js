async function getCurrentTabId() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab.id;
}

function restart() {
  // const fromPageLocalStore = await chrome.tabs.executeScript(tab.id, { code: `localStorage['${key}']` });
  // await chrome.storage.local.set({[key]:fromPageLocalStore[0]});

  localStorage.clear();

  // chrome.storage.local.get(['nyt-wordle-state'], function(res) {
  //   console.log("RES", res);
  //   return res;
    // let state = res['nyt-wordle-state'];
    // title.innerHTML = res;
    // state['boardState'] = ["", "", "", "", ""];
    // state['evaluations'] = [null, null, null, null, null];
    // state['gameStatus'] = 'IN_PROGRESS';
    // state['lastCompletedTs'] = null;
    // chrome.storage.local.set(state, function() {
    //   return state;
    // });
  // });

  console.log("ddd", chrome.tabs.getCurrent())


// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   // console.log("tabs", tabs)
//   chrome.tabs.reload(tabs[0].id);
// });
  // let tabId = await getCurrentTabId();
  console.log("T")
  // chrome.tabs.reload(tabId);
  // return true;
};

chrome.action.onClicked.addListener(function(tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: restart
  });
});


// chrome.scripting.executeScript(
//   {
//     target: { tabId: null },
//     function: restart
//   },
//   (res) => {}
// );

// chrome.action.onClicked.addListener(function(tab) {
//   console.log('Turning ' + tab.url + ' red!');
//   chrome.scripting.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   });
// });



// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     // let tab = await getCurrentTab();
//     // console.log(sender.tab ?
//     //             "from a content script:" + sender.tab.url :
//     //             "from the extension");
//     // if (request.greeting === "hello")

//     chrome.scripting.executeScript({
//       target: { tabId: sender.tab.id },
//       function: restart
//     }).then((weirdFrameArray) => {
//       sendResponse({'a':'b', 'status': weirdFrameArray[0].result});
//     }).catch(err => console.log(err));


//     // chrome.scripting.executeScript(
//     //   {
//     //     target: { tabId: sender.tab.id },
//     //     function: restart
//     //   },
//     //   (res) => {
//     //     sendResponse({'a':'b', 'status': res});
//     //   }
//     // );

//     return true;
//   }
// );