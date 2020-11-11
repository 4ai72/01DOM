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


//要素の作成、追加

let michiko = document.querySelector('#parent');

/* 要素の作成、追加
let akemi = document.createElement('div');
akemi.textContent = 'あけみ';
michiko.appendChild(akemi);
*/

//追加する親要素を取得
var parent_text = document.querySelector('#text');

//新しく追加予定のpタグを生成
var child_p = document.createElement('p');

child_p.textContent = '追加されるもの';

//新しく生成したpタグを親要素に追加
parent_text.appendChild(child_p);

//指定した要素の手前にタグを追加する方法
var child_moge = document.createElement('p');
child_moge.textContent = 'もげ';

//追加するための親.insertBefore(追加したい要素、追加済みの要素);
//こう指定すると、追加済みの要素の手前に追加する
parent_text.insertBefore(child_moge,child_p);

//ボタンAを押したら、id=textのホゲの部分にpタグが追加される
function btna_click(){
	console.log('btna_click');
	var parent_text = document.querySelector('#text');
	var child_p_for_btn = document.createElement('p');
	//押されたボタンの文字を表示する（今回はボタンAが表示される）
child_p_for_btn.textContent = document.querySelector('#btnA').textContent;

//idの追加
child_p_for_btn.id = 'add_id';
child_p_for_btn.style.color ='blue';

//生成したpタグの追加
parent_text.appendChild(child_p_for_btn);

//要素の削除
//削除したい要素そのものを指定して、要素、remove();と削除する方法
let ant = document.querySelector('#ant');
ant.remove();

//削除したい要素が含まれている親要素に対して、削除したい要素を指定する方法
let room = document.querySelector('#room');
//アリが削除された上で実行すると、ゴキブリが削除される
room.removeChild(room.firstElementChild);

/*削除したい要素が含まれる親要素、removeChild（消したい要素）;
roomの最初の子要素を削除
room.removeChild(room.firstElementChild);
ゴキブリを指定して削除

room.removeChild(document.querySelector('#cockroach'));
*/

}






















