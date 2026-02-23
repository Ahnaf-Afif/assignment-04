const all = document.getElementById("allSection");
const interview = document.getElementById("interviewSection");
const rejected = document.getElementById("rejectedSection");
const appliedOrNot = document.getElementById("appliedornot");

function hideShow(id) {
  all.classList.add("hidden");
  interview.classList.add("hidden");
  rejected.classList.add("hidden");

  if (id === "all" && all.offsetParent === null) {
    all.classList.remove("hidden");
  } else if (id === "interview" && interview.offsetParent === null) {
    interview.classList.remove("hidden");
  } else if (id === "rejected" && rejected.offsetParent === null) {
    rejected.classList.remove("hidden");
  }
}

all.addEventListener("click", function (e) {
  if (e.target.classList.contains("interview-btn")) {
    e.target.disabled = true;
    e.target.style.opacity = "0.5";
    const card = e.target.closest(".cards");
    card.querySelector(".appliedornot").innerText = "Interview";
    const clonedCard = card.cloneNode(true);
    clonedCard.originalCard = card;
    clonedCard.querySelector(".appliedornot").innerText = "Interview";
    interview.appendChild(clonedCard);
    const rejectedButton = card.querySelector(".rejected-btn");
    rejectedButton.disabled = true;
    rejectedButton.style.opacity = "0.5";
  }

  if (e.target.classList.contains("rejected-btn")) {
    e.target.disabled = true;
    e.target.style.opacity = "0.5";

    const card = e.target.closest(".cards");

    card.querySelector(".appliedornot").innerText = "Rejected";
    const clonedCard = card.cloneNode(true);
    clonedCard.originalCard = card;

    clonedCard.querySelector(".appliedornot").innerText = "Rejected";
    rejected.appendChild(clonedCard);
    const rejectedButton = card.querySelector(".interview-btn");
    rejectedButton.disabled = true;
    rejectedButton.style.opacity = "0.5";
    const rejectedButton2 = clonedCard.querySelector(".interview-btn");
    rejectedButton2.disabled = true;
    rejectedButton2.style.opacity = "0.5";
  }
});

interview.addEventListener("click", function (e) {
  if (e.target.classList.contains("rejected-btn")) {
    e.target.disabled = true;
    e.target.style.opacity = "0.5";
    const card = e.target.closest(".cards");
    card.querySelector(".appliedornot").innerText = "Rejected";
    card.originalCard.querySelector(".appliedornot").innerText = "Rejected";
    rejected.appendChild(card);
  }
});

rejected.addEventListener("click", function (e) {
  if (e.target.classList.contains("interview-btn")) {
    e.target.disabled = true;
    e.target.style.opacity = "0.5";
    const card = e.target.closest(".cards");
    card.querySelector(".appliedornot").innerText = "Interview";
    card.originalCard.querySelector(".appliedornot").innerText = "Interview";
    interview.appendChild(card);
  }
});
