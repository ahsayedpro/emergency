let coins = 100;
let heartCount = 0;
let copyCount = 0;

const coinDisplay = document.getElementById("coin-count");
const heartDisplay = document.getElementById("heart-count");
const copyDisplay = document.getElementById("copy-count");
const callHistoryContainer = document.getElementById("call-history");
const clearBtn = document.getElementById("clear-btn");

// Handle Call Button
document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;

    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }
    coins -= 20;
    coinDisplay.innerText = coins;
    alert(`📞 Calling ${serviceName} at ${serviceNumber}`);

    const historyBox = document.createElement("div");
    historyBox.className =
      "w-full flex justify-between my-4 gap-4 text-gray-700 bg-gray-100 p-4 rounded-md font-medium";
    const time = new Date().toLocaleTimeString();
    historyBox.innerHTML = `
        <div>
          <h1 class="text-[18px]">${serviceName}</h1>
          <h1 class="text-[18px]">${serviceNumber}</h1>
        </div>
        <h1 class="text-[18px]">${time}</h1>
      `;
    callHistoryContainer.appendChild(historyBox);
  });
});

// Handle Copy Button
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const serviceNumber = card.querySelector(".service-number").innerText;
    navigator.clipboard.writeText(serviceNumber).then(() => {
      alert(`Copied number: ${serviceNumber}`);
      copyCount++;
      copyDisplay.innerText = copyCount;
    });
  });
});

// Handle Heart Button
document.querySelectorAll(".heart-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartDisplay.innerText = heartCount;
  });
});

// Handle Clear History
clearBtn.addEventListener("click", () => {
  const histories = callHistoryContainer.querySelectorAll("div.my-4");
  histories.forEach((h) => h.remove());
});
