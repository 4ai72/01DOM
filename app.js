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

//親要素の取得(子要素を元にどう取得するか)
let first_ika = document.querySelector('.ika');
console.log(first_ika);

let ul = first_ika.parentElement;
console.log(ul);
//上と同じ
console.log(document.querySelector('.ika').parentElement);


//子要素の取得
//分かりにくいので、仮にhtml22行目のidに名前をつける（hogehoge）
let parent = document.querySelector('#hogehoge')
console.log('parentの指定');
console.log(parent);
console.log('parent.childrenの指定');
console.log(parent.children);

//#takoリストの一番上の項目にtextblueクラスを当てる
first_ika.classList.add('textblue');

/* 練習問題
id=hogehogeのリストに全部textblueクラスを当ててみましょう
ulそのものに指定
parent.classList.add('textblue')
各liタグに指定
*/

for (let li of parent.children){
	li.classList.add('textblue');
}


/* for (let li of parent.children){
	2と表示されているリストだけ、クラスが当たる
	if(li.textContent == '2'){
	li.classList.add('textblue')
	}
}

for文使わないパターン
parent.children[1].classList.add('textblue');

*/

//クラスの削除
parent.children[2].classList.remove('textblue');




//↓フォームの中の操作

//inputタグ入力情報の取得（空欄タグのこと　ex.名前欄）
var input = document.querySelector('#input_name');

//読み込んだときは空欄なので、いつも空文字が表示される
console.log(input.value);

//送信ボタンがクリックされた時に実行される関数
function getInput(){
	console.log('aaaa');
	var input = document.querySelector('#input_name');

	console.log(input.value);
	//値の編集
	input.value = input.value + '様';
}


//イベントリスナー
let text = document.querySelector('#text');

//addEventListener(click,mouseoverなどのイベント名,function(){行いたい処理})
text.addEventListener('click',function(){
	//<div id="text" style="color:red;">と同じ効果をつける
　this.style.color = 'red';
});

//this イベントが発生した部品そのもののこと

let html = document.querySelector('#html');
html.addEventListener('mouseover',function(){
	this.style.color = 'green';
})
html.addEventListener('mouseleave',function(){
	this.style.color = '';
});



















