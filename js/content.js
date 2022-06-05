// var xhr = new XMLHttpRequest();
// var file_path = chrome.extension.getURL("../../cnData/figma.json")
// console.log(file_path);
// xhr.open('GET',file_path, true); //XMLHttpRequest 对象用于在后台与服务器交换数据
// xhr.send(null)
// xhr.onreadystatechange = function () {
//   if(xhr.readyState == XMLHttpRequest.DONE){
//       //加载词典
//       var json = JSON.parse(Request.responseText);
//       for(var i=0;i<json.length;i++){
//         console.log(json[i].name);
//       }
//       console.log(json);
//   }
// }

// // 定义临时空数组
// let allData = [];

// // // 处理数据,形如:[["File", "文件"],["Edit","编辑"]]
// // allData = Object.keys(data).map(item=>([item,jsonData[item][0]]))

// // 引入观察器 MutationObserver
// let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

// // 观察器的配置（需要观察什么变动）
// let MutationObserverConfig = {
//   childList: true,
//   subtree: true,
//   attributeFilter: ["data-label"],
//   characterData: true,
// };

// // 创建一个观察器实例并传入回调函数
// let observer = new MutationObserver(function (mutations) {
//   let treeWalker = document.createTreeWalker(
//     document.body,
//     NodeFilter.SHOW_ALL,
//     {
//       acceptNode: function (node) {
//         if (node.nodeType === 3 || node.hasAttribute("data-label")) {
//           return NodeFilter.FILTER_ACCEPT;
//         } else {
//           return NodeFilter.FILTER_SKIP;
//         }
//       },
//     },
//     false
//   );

//   // 映射中文
//   let dataMap = new Map();
//   for (i in jsonData) {
//     if (i && !dataMap.has(i)) {
//       dataMap.set(i, jsonData[i][0]);
//     }
//   }
//    allData.forEach(([key, val]) => {
//      if (key && !dataMap.has(key)) {
//        dataMap.set(key, val);
//      }
//    });
//   let currentNode = treeWalker.currentNode;

//   //  替换
//   while (currentNode) {
//     if (currentNode.nodeType === 3) {
//       let key1 = currentNode.textContent;
//       if (dataMap.has(key1)) currentNode.textContent = dataMap.get(key1);
//     } else {
//       let key2 = currentNode.getAttribute("data-label");
//       if (dataMap.has(key2))
//         currentNode.setAttribute("data-label", dataMap.get(key2));
//     }

//     currentNode = treeWalker.nextNode();
//   }
// });

// // 开始观察目标节点
// observer.observe(document.body, MutationObserverConfig);
//存储数据
// chrome.storage.sync.set({
//   string: 'demo',
//   array: ['数组', '或者'],
//   object: {
//     k: '或者',
//     v: '对象'
//   },
//   int: 111
// }, function(){
//   console.log('保存成功')
// })
//获取数据
// chrome.storage.local.get函数需要两个参数，第一个为要获取的键值，第二个是获取成功回调函数
// chrome.storage.sync.get('array', function(arr){
//   console.log(arr);
// })
// //还可以这样
// chrome.storage.sync.get(['object', 'string'], function(obj){
//   console.log(obj.object)
//   console.log(obj.string)
// })
//删除数据
// chrome.storage.local.get函数需要两个参数，第一个为要获取的键值，第二个是获取成功回调函数
// chrome.storage.local.remove('string', function(){
//   console.log('删除成功');
// })
// //或者
// chrome.storage.local.remove(['int', 'array'], function(){
//   console.log('删除成功')
// })
// chrome.storage.local.clear()