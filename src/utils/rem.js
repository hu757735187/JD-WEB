function font() {
    //设置默认宽
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 37.5 + 'px'
}



font()



window.onresize = font()