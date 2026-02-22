const all = document.getElementById("allSection");
const interview = document.getElementById("interviewSection");
const rejected = document.getElementById("rejectedSection");

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
    const card = e.target.closest("#card");
    interview.appendChild(card);
    all.removeChild(card);
  }

  if (e.target.classList.contains("rejected-btn")) {
    const card = e.target.closest("#card");
    rejected.appendChild(card);
    all.removeChild(card);
  }
});

interview.addEventListener("click", function (e) {
  if (e.target.classList.contains("rejected-btn")) {
    const card = e.target.closest("#card");
    rejected.appendChild(card);
    interview.removeChild(card);
  }
});

rejected.addEventListener("click", function (e) {
  if (e.target.classList.contains("interview-btn")) {
    const card = e.target.closest(".card");
    interview.appendChild(card);
    rejected.removeChild(card);
  }
});
