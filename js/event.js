chrome.tabs.onCreated.addListener(function(tab){
	// alert("Tab created");
	// alert("New Tab Created");
	// Node.addNode(temp);
    // count++;
    if (tab.openerTabId == null) {
    	// rootNode = new Node ("test", count, "test.com", count+4);
        rootNode = new Node(tab.title, tab.id, tab.url, tab.openerTabId);
        console.log(tab.title + " Opened");
    	treeData.push(rootNode);

    } 
    else {
        console.log("New Tab in tree");
        console.log(tab.title + " Opened");
        var temp = new Node(tab.title, tab.id, tab.url, tab.openerTabId);
        addChild(tab.openerTabId, temp);
    }
    
    saveData();
    console.log(localStorage.getItem("rootNode"));
});

function handleCreation(tab){

}

// //tab removed listener
function handleRemoved(tabId, removeInfo) {
  // alert("Tab: " + tabId + " is closing \n Window ID: " + removeInfo.windowId + "\nWindow is closing: " + removeInfo.isWindowClosing);


}

chrome.tabs.onRemoved.addListener(handleRemoved);


// var data_test = "data test succsss";
// //tab updated listener

function handleUpdated(tabId, changeInfo) {
  // alert("Tab: " + tabId + " is updated \n Status: " 
  // 	+ changeInfo.status + "\nTitle: " + changeInfo.title + "\n URL: " + changeInfo.url );
  if (changeInfo.title != undefined) {
     // alert("Updating tab: " + tabId + " \n Setting name to : " + changeInfo.title );
    updateNodeName(tabId, changeInfo.title);
  }
}
// function change(change,changeInfo){
//     //ChangeInfo tab.name
//     //change name
//     ChangeInfo = change;

// }
// change("name",currTab.name);

// function update(tabId, name, urlString){
//     findTab(tabId, rootNode, name, urlString);

// }

// function findTab(tabId,currTab){
//     if (currTab.id == tabId) {
//         // use push

//     } else {
//         console.log("False");
//         for (var i = 0; i < currTab.children.length; i++) {
//             findTab(tabId, currTab.children[i]);
//         }
//     }

// }

chrome.tabs.onUpdated.addListener(handleUpdated);

// //message listener (from popup manipulation)
// chrome.runtime.onMessage.addListener(
// 	function(request, sender, sendResponse) {
// 		if(request.command == "shiftLevel"){
// 			var targetId = request.targetId;
// 			treeShiftLevel(targetId);	
// 			sendResponse({status: "success"});
// 		}
// 	}
// );
