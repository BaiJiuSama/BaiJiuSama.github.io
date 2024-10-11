document.addEventListener('click', function(event) {
    // 创建一个新的span元素作为浮动文本
    const floatingText = document.createElement('span');
    floatingText.className = 'floating-text';
    floatingText.innerText = 'Meow'; // 你可以替换为想要的文字

    // 将该元素放置在鼠标点击的位置 (偏移文本使其在中心浮动)
    floatingText.style.left = `${event.pageX}px`;
    floatingText.style.top = `${event.pageY}px`;

    // 添加到页面的body中
    document.body.appendChild(floatingText);

    // 1秒后移除该元素
    setTimeout(() => {
        floatingText.remove();
    }, 1000); // 保持文本显示1秒钟
});
