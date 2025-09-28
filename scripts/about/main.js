getHitokoto();
console.log("Wishing no estrangement between people,");
console.log("And that everything fine in the world can be shared.");
// console.log("If I could be a normal girl, I would do my best to love this world.");
// console.log("*: 想要变成鹰的鱼。");
document.querySelector(".this-year").innerText = (new Date()).getFullYear();
var randbg = null;
var bgSrc = null;
var bgBlock = false;
var normal_title = document.title;
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState == "hidden") {
    setTimeout(function () {
      document.title = "|ω・) 看不到我~看不到我~";
    }, 3000);
  } else {
    document.title = "(っ °Д °;)っ 啊呀，被发现了！";
    setTimeout(function () {
      document.title = normal_title;
    }, 3000);
  }
});
function getHitokoto() {
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://v1.hitokoto.cn/?' + Math.random());
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      let data = JSON.parse(xhr.responseText);
      document.getElementById("hitokoto-content").innerText = data.hitokoto;
      document.getElementById("hitokoto-author").innerText = data.from;
    }
  }
  xhr.send();
}
function handleRandBG(status) {
  if (status.checked) {
    if (!bgBlock) {
      bgBlock = true;
      var bgImage = new Image();
      bgImage.onload = (() => {
        bgBlock = false;
      });
      bgSrc = 'https://imgapi.lie.moe/random?host=od&' + String(Math.random());
      bgImage.src = bgSrc;
    }
    randbg = document.createElement("style");
    randbg.innerText = 'html:before{background:url(' + bgSrc + ') no-repeat;background-size:cover;background-position:center 0;content:"";width:100%;height:100%;top:0;left:0;z-index:-1;position:fixed;}';
    document.body.appendChild(randbg);
  } else {
    randbg.remove();
  }
}
