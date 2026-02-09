function gacha() {
    const snacks = ["チョコレート", "ポテトチップス", "ショートケーキ", "せんべい", "アイスクリーム", "ドーナツ"];
    const randomIndex = Math.floor(Math.random() * snacks.length);
    const resultElement = document.getElementById("result");

    // 一度アニメーションのクラスを外す（連続で押した時用）
    resultElement.classList.remove("animate");

    // 0.01秒だけ待ってからクラスを付け直す（ブラウザに「再描画」させるコツ）
    setTimeout(() => {
        resultElement.innerText = snacks[randomIndex];
        resultElement.classList.add("animate");
        resultElement.style.color = "#ff5722";
    }, 10);
}
