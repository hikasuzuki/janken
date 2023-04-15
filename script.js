const hands = ["グー", "チョキ", "パー", "ブラックホール", "ホワイトホール"];
let userHand = null;
let wins = 0;
let draws = 0;
let losses = 0;
let userHandsHistory = [];

function selectHand(hand) {
  userHand = hand;
  document.getElementById("selected-hand").innerText = "選んだ手: " + userHand;
  playGame();
}

function playGame() {
  const drumrollSound = new Audio('drumroll.mov');
  drumrollSound.play();
  setTimeout(() => {
    const computerHand = hands[Math.floor(Math.random() * hands.length)];
    document.getElementById("computer-hand").innerText = "コンピュータの手: " + computerHand;
    
    let result = "";
        if (userHand === computerHand) {
            result = "あいこ";
            draws++;
            document.body.style.backgroundColor = "gray";
            const drawSound = new Audio('draw.mp3');
            drawSound.play();
        } else if ((userHand === "グー" && (computerHand === "チョキ" || computerHand === "ホワイトホール")) ||
                (userHand === "チョキ" && (computerHand === "パー" || computerHand === "ホワイトホール")) ||
                (userHand === "パー" && (computerHand === "グー" || computerHand === "ホワイトホール")) ||
                (userHand === "ブラックホール" && (computerHand === "グー" || computerHand === "チョキ" || computerHand === "パー")) ||
                (userHand === "ホワイトホール" && computerHand === "ブラックホール")) {
            result = "勝ち";
            wins++;
            document.body.style.backgroundColor = "limegreen";
            const winSound = new Audio('win.mp3');
            winSound.play();
        } else {
            result = "負け";
            losses++;
            document.body.style.backgroundColor = "red";
            const loseSound = new Audio('lose.mp3');
            loseSound.play();
        }

        document.getElementById("result").innerText = "対戦結果: " + result;
        document.getElementById("score").innerText = "勝ち：" + wins + "回 あいこ：" + draws + "回 負け：" + losses + "回";
        userHandsHistory.push(userHand);
    }, 1000);
}

// ボタンクリック時のイベントリスナーを設定
hands.forEach(hand => {
  document.getElementById(hand).addEventListener("click", () => selectHand(hand));
});
