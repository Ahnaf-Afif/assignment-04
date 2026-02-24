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

function totalJobs(secId, msgId, countId) {
  const totalJobs = updateSection("allSection", null, "totalCount");
  const currentJobs = updateSection(secId, msgId, countId);

  document.getElementById("total-jobs").innerText =
    `${currentJobs} out of ${totalJobs} jobs`;
}

function summary() {
  const totalJobs = updateSection("allSection", null, "totalCount");
  document.getElementById("total-jobs").innerText = `${totalJobs} jobs`;
}

function updateSection(secId, msgId, dispId) {
  const section = document.getElementById(secId);
  const message = document.getElementById(msgId);

  const cardCount = section.querySelectorAll(".cards").length;

  if (message) {
    if (cardCount === 0) {
      message.style.display = "block";
    } else {
      message.style.display = "none";
    }
  }

  if (dispId) {
    document.getElementById(dispId).innerText = cardCount;
  }

  return cardCount;
}

all.addEventListener("click", function (e) {
  if (e.target.classList.contains("interview-btn")) {
    const card = e.target.closest(".cards");
    const clonedCard = card.cloneNode(true);
    e.target.disabled = true;
    e.target.style.opacity = "0.5";
    card.querySelector(".appliedornot").innerText = "Interview";
    card.myClone = clonedCard;
    clonedCard.originalCard = card;
    clonedCard.querySelector(".appliedornot").innerText = "Interview";
    interview.appendChild(clonedCard);
    updateSection("interviewSection", "interviewMessage", "interviewCount");
    const rejectedButton = card.querySelector(".rejected-btn");
    rejectedButton.disabled = true;
    rejectedButton.style.opacity = "0.5";
  }

  if (e.target.classList.contains("rejected-btn")) {
    const card = e.target.closest(".cards");
    const clonedCard = card.cloneNode(true);
    e.target.disabled = true;
    e.target.style.opacity = "0.5";
    card.querySelector(".appliedornot").innerText = "Rejected";
    card.myClone = clonedCard;
    clonedCard.originalCard = card;
    clonedCard.querySelector(".appliedornot").innerText = "Rejected";
    rejected.appendChild(clonedCard);
    updateSection("rejectedSection", "rejectedMessage", "rejectedCount");
    const interviewButton = card.querySelector(".interview-btn");
    interviewButton.disabled = true;
    interviewButton.style.opacity = "0.5";
  }
  if (e.target.closest(".delete-btn")) {
    const card = e.target.closest(".cards");
    if (card.originalCard) {
      card.originalCard.remove();
    }

    if (card.myClone) {
      card.myClone.remove();
    }

    card.remove();

    updateSection("allSection", null, "totalCount");
    updateSection("interviewSection", "interviewMessage", "interviewCount");
    updateSection("rejectedSection", "rejectedMessage", "rejectedCount");
    summary();
  }
});

interview.addEventListener("click", function (e) {
  if (e.target.classList.contains("rejected-btn")) {
    const card = e.target.closest(".cards");
    card.querySelector(".appliedornot").innerText = "Rejected";
    card.originalCard.querySelector(".appliedornot").innerText = "Rejected";
    rejected.appendChild(card);
    updateSection("interviewSection", "interviewMessage", "interviewCount");
    updateSection("rejectedSection", "rejectedMessage", "rejectedCount");
  }
  if (e.target.closest(".delete-btn")) {
    const card = e.target.closest(".cards");

    if (card.originalCard) {
      card.originalCard.remove();
    }

    if (card.myClone) {
      card.myClone.remove();
    }

    card.remove();

    updateSection("allSection", null, "totalCount");
    updateSection("interviewSection", "interviewMessage", "interviewCount");
    updateSection("rejectedSection", "rejectedMessage", "rejectedCount");
    totalJobs("interviewSection", "interviewMessage", "interviewCount");
  }
});

rejected.addEventListener("click", function (e) {
  if (e.target.classList.contains("interview-btn")) {
    const card = e.target.closest(".cards");
    card.querySelector(".appliedornot").innerText = "Interview";
    card.originalCard.querySelector(".appliedornot").innerText = "Interview";
    interview.appendChild(card);
    updateSection("rejectedSection", "rejectedMessage", "rejectedCount");
    updateSection("interviewSection", "interviewMessage", "interviewCount");
  }
  if (e.target.closest(".delete-btn")) {
    const card = e.target.closest(".cards");

    if (card.originalCard) {
      card.originalCard.remove();
    }

    if (card.myClone) {
      card.myClone.remove();
    }

    card.remove();

    updateSection("allSection", null, "totalCount");
    updateSection("interviewSection", "interviewMessage", "interviewCount");
    updateSection("rejectedSection", "rejectedMessage", "rejectedCount");
  }
  totalJobs("rejectedSection", "rejectedMessage", "rejectedCount");
});

summary();
