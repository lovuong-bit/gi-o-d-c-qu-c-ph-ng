// Dữ liệu câu hỏi bám sát mục IV: Trách nhiệm quản lý, xây dựng và bảo vệ biên giới
const quizData = [
  {
    q: "Chủ quyền lãnh thổ quốc gia bao gồm những bộ phận nào?",
    a: [
      "Vùng đất và vùng nước",
      "Vùng đất, vùng nước, vùng trời và lòng đất",
      "Vùng biển và vùng trời",
      "Chỉ vùng đất liền",
    ],
    c: 1,
  },
  {
    q: "Biên giới quốc gia của Việt Nam được xác định chính xác dựa trên?",
    a: [
      "Các hiệp ước, nghị định thư giữa Việt Nam và các nước láng giềng",
      "Sự thỏa thuận bằng lời nói",
      "Ý muốn chủ quan của từng địa phương",
      "Các bản đồ cổ không rõ nguồn gốc",
    ],
    c: 0,
  },
  {
    q: "Xây dựng và bảo vệ chủ quyền biên giới là trách nhiệm của?",
    a: [
      "Riêng Bộ đội Biên phòng",
      "Lực lượng Công an vũ trang",
      "Toàn Đảng, toàn dân, toàn quân và mọi công dân",
      "Người dân vùng biên giới",
    ],
    c: 2,
  },
  {
    q: "Lực lượng nào là nòng cốt, chuyên trách quản lý, bảo vệ biên giới quốc gia?",
    a: [
      "Dân quân tự vệ",
      "Bộ đội Biên phòng",
      "Hải quan cửa khẩu",
      "Cảnh sát biển",
    ],
    c: 1,
  },
  {
    q: "Nội dung nào sau đây là trách nhiệm của công dân đối với biên giới?",
    a: [
      "Chấp hành pháp luật về biên giới quốc gia",
      "Tham gia các phong tào tự quản bảo vệ đường biên",
      "Tố giác các hành vi xâm phạm chủ quyền",
      "Tất cả các đáp án trên",
    ],
    c: 3,
  },
  {
    q: "Học sinh cần làm gì để thực hiện trách nhiệm bảo vệ chủ quyền?",
    a: [
      "Học tập tốt, nắm vững kiến thức GDQP",
      "Tham gia các hoạt động hướng về biên giới, hải đảo",
      "Nâng cao cảnh giác trước luận điệu xuyên tạc",
      "Tất cả các hành động trên",
    ],
    c: 3,
  },
  {
    q: "Hành vi nào bị pháp luật nghiêm cấm tại khu vực biên giới?",
    a: [
      "Thăm thân nhân có giấy phép",
      "Xâm phạm cột mốc, làm thay đổi dấu hiệu đường biên",
      "Kinh doanh đúng quy định",
      "Đi du lịch theo đoàn",
    ],
    c: 1,
  },
  {
    q: "Biên giới trên biển của Việt Nam được xác định như thế nào?",
    a: [
      "Ranh giới ngoài của lãnh hải",
      "Ranh giới ngoài của vùng tiếp giáp lãnh hải",
      "Ranh giới ngoài của vùng đặc quyền kinh tế",
      "Ranh giới của thềm lục địa",
    ],
    c: 0,
  },
  {
    q: "Nguyên tắc cơ bản trong xây dựng biên giới Việt Nam là?",
    a: [
      "Hòa bình, hữu nghị, ổn định lâu dài",
      "Xung đột vũ lực",
      "Tự do mở cửa không kiểm soát",
      "Đóng kín hoàn toàn biên giới",
    ],
    c: 0,
  },
  {
    q: "Khi phát hiện hành vi xâm phạm biên giới, công dân cần làm gì?",
    a: [
      "Không quan tâm vì có quân đội lo",
      "Báo cáo ngay cho chính quyền địa phương hoặc đồn biên phòng gần nhất",
      "Tự mình dùng vũ lực giải quyết",
      "Chờ người khác báo giúp",
    ],
    c: 1,
  },
  {
    q: "Khu vực biên giới trên đất liền bao gồm những địa danh nào?",
    a: [
      "Toàn bộ các tỉnh có biên giới",
      "Các xã, phường, thị trấn có một phần địa giới trùng với biên giới",
      "Các huyện miền núi",
      "Các khu kinh tế cửa khẩu",
    ],
    c: 1,
  },
  {
    q: "Hoạt động nào thể hiện trách nhiệm của học sinh với biên giới quốc gia?",
    a: [
      "Viết thư động viên các chiến sĩ biên phòng",
      "Tham gia hội thao quốc phòng",
      "Tìm hiểu về cột mốc chủ quyền",
      "Tất cả các ý trên",
    ],
    c: 3,
  },
  {
    q: "Chủ quyền biên giới quốc gia mang tính chất?",
    a: [
      "Tạm thời theo giai đoạn",
      "Thiêng liêng và bất khả xâm phạm",
      "Có thể chia sẻ với nước khác",
      "Không bắt buộc bảo vệ",
    ],
    c: 1,
  },
  {
    q: "Lãnh thổ Việt Nam giáp với các nước nào trên đất liền?",
    a: [
      "Trung Quốc, Lào, Campuchia",
      "Lào, Thái Lan, Campuchia",
      "Trung Quốc, Lào, Thái Lan",
      "Campuchia, Malaysia, Lào",
    ],
    c: 0,
  },
  {
    q: "Một trong các nghĩa vụ thiêng liêng của công dân là?",
    a: [
      "Đi du lịch nước ngoài",
      "Bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa",
      "Làm việc tự do",
      "Mua sắm hàng hiệu",
    ],
    c: 1,
  },
  {
    q: "Vai trò của quần chúng nhân dân trong bảo vệ biên giới là?",
    a: [
      "Tai mắt giúp lực lượng chức năng quản lý địa bàn",
      "Không có vai trò gì",
      "Chỉ hỗ trợ về kinh tế",
      "Chỉ làm nhiệm vụ sản xuất",
    ],
    c: 0,
  },
  {
    q: "Ngày 3/3 hàng năm được gọi là ngày gì?",
    a: [
      "Ngày Quốc phòng toàn dân",
      "Ngày truyền thống Bộ đội Biên phòng và Ngày biên phòng toàn dân",
      "Ngày Quân đội nhân dân",
      "Ngày Thương binh liệt sĩ",
    ],
    c: 1,
  },
  {
    q: "Học sinh vi phạm các quy định về an ninh quốc phòng sẽ bị?",
    a: [
      "Tuyên dương",
      "Xử lý theo quy định của pháp luật và nội quy trường học",
      "Bỏ qua vì còn nhỏ",
      "Cấp bằng khen",
    ],
    c: 1,
  },
  {
    q: "Nòng cốt bảo vệ biên giới trên biển là lực lượng nào?",
    a: ["Không quân", "Hải quân và Cảnh sát biển", "Kiểm lâm", "Dân quân biển"],
    c: 1,
  },
  {
    q: "Ý nghĩa của việc xây dựng đường biên giới hòa bình là?",
    a: [
      "Để nước khác xâm chiếm dễ hơn",
      "Tạo môi trường ổn định để phát triển kinh tế, xã hội",
      "Để bỏ bớt quân đội",
      "Không có ý nghĩa gì",
    ],
    c: 1,
  },
];

let currentIdx = 0;
let score = 0;
let timer;
let timeLeft = 15;
let active = true;

let audioCtx;
function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playTone(freq, type, duration) {
  initAudio();
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.01,
      audioCtx.currentTime + duration,
    );
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function startGame() {
  initAudio();
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  active = true;
  timeLeft = 15;
  const data = quizData[currentIdx];

  document.getElementById("question-number").innerText =
    `${(currentIdx + 1).toString().padStart(2, "0")} / ${quizData.length}`;
  document.getElementById("question-text").innerText = data.q;

  const feedback = document.getElementById("feedback");
  feedback.classList.add("opacity-0");

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  data.a.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className =
      "option-btn p-5 rounded-2xl text-left font-bold flex items-center gap-4 text-base md:text-lg";
    btn.innerHTML = `<span class="bg-yellow-500 text-black w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm font-black text-sm">${String.fromCharCode(65 + i)}</span> <span>${opt}</span>`;
    btn.onclick = () => check(i, btn);
    container.appendChild(btn);
  });

  updateTimerUI();
  startTimer();
}

function updateTimerUI() {
  const timerEl = document.getElementById("timer-text");
  const bar = document.getElementById("timer-bar");
  timerEl.innerText = timeLeft;
  // Thay đổi width thông qua JS thay vì thuộc tính style cố định trong HTML để tránh lỗi VS Code
  bar.style.width = `${(timeLeft / 15) * 100}%`;
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    updateTimerUI();

    if (timeLeft <= 3 && timeLeft > 0) playTone(600, "sine", 0.1);

    if (timeLeft <= 0) {
      clearInterval(timer);
      check(-1);
    }
  }, 1000);
}

function check(idx, btn) {
  if (!active) return;
  active = false;
  clearInterval(timer);

  const correct = quizData[currentIdx].c;
  const feedback = document.getElementById("feedback");
  feedback.classList.remove("opacity-0");

  const allBtns = document.querySelectorAll(".option-btn");

  if (idx === correct) {
    score++;
    if (btn) btn.classList.add("correct");
    feedback.innerText = "TÀY RỒI";
    feedback.className =
      "mt-8 text-center font-black text-xl uppercase italic transition-all duration-300 text-green-400";
    playTone(1000, "triangle", 0.4);
  } else {
    if (btn) btn.classList.add("wrong");
    if (allBtns[correct]) allBtns[correct].classList.add("correct");
    feedback.innerText = idx === -1 ? "HẾT GIỜ " : "CÒN NON LẮM ";
    feedback.className =
      "mt-8 text-center font-black text-xl uppercase italic transition-all duration-300 text-red-500";
    playTone(200, "sawtooth", 0.4);
  }

  document.getElementById("current-score").innerText = score * 50;

  setTimeout(() => {
    currentIdx++;
    if (currentIdx < quizData.length) loadQuestion();
    else finish();
  }, 2000);
}

function finish() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");
  document.getElementById("final-score").innerText =
    `${score}/${quizData.length}`;

  const msg = document.getElementById("performance-msg");
  const percent = (score / quizData.length) * 100;

  if (percent === 100)
    msg.innerText =
      "CHIẾN SĨ ƯU TÚ! Bạn nắm vững mọi kiến thức bảo vệ biên giới!";
  else if (percent >= 70)
    msg.innerText = "HOÀN THÀNH NHIỆM VỤ! Bạn có tinh thần trách nhiệm cao.";
  else if (percent >= 50)
    msg.innerText = "ĐẠT YÊU CẦU. Hãy tiếp tục phát huy tinh thần học tập.";
  else msg.innerText = "CẦN RÈN LUYỆN THÊM kiến thức về biên giới quốc gia.";
}
