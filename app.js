/* DOMとは、Document Object Modelの略
HTMLのタグをObject（部品）と見立ててJavaScriptで操作できる方法のこと

タグ名を指定して、DOM操作する方法
getElementsByTagName     */
let list = document.getElementsByTagName('a');
console.log(list);
console.log(list[0]);
console.log(list[1]);

console.log(list[0].href);
//↑これを書くとリンクが直接検証に表示される（二次元配列）

//getElementsByClassName
let fuga = document.getElementsByClassName('fuga');
console.log(fuga);
//配列名.length 要素の個数
for (let i = 0;i < fuga.length;i++){
	console.log(fuga[i].textContent);
}


// querySelector(単一の要素の取得　先頭のものを一つだけ取る)
let tako = document.querySelector('#tako .ika');
console.log(tako);

// querySelectorAll(合致する全ての要素の取得)
let ika = document.querySelectorAll('#tako .ika');
console.log(ika);

