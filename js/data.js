// var datas = {
//     //执行获取英语单词并存储
//     do_load_eng_words: function(file_text) {
//         //获取到wordsList的JSON文件
//         var data = JSON.parse(file_text)
//         var matchWords = []
//         for(var key in data){
//             //获取JSON文件中英语单词列表
//             var allWords = data[key].wordsList
//             for(w =0; w < allWords.length; w++){
//                 //遍历英语单词对象，获得所有的英语单词
//                 for(var key in allWords[w]){
//                     matchWords.push(key)
//                 }
//             }
//         }
//         local_storage = chrome.storage.local;
//         //存储所有单词
//         local_storage.set({"match_words": matchWords});
//         //存储所有单词对象
//         local_storage.set({"allWordsObj": allWords})
//     },
//     //配置获取英语单词，并执行获取
//     load_eng_words: function(){
        
//     }
// }
