const form = document.getElementById("resultForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const errorMessage = document.getElementById("errorMessage");
  const name = document.getElementById("studentName").value.trim();
  const roll = document.getElementById("rollNumber").value.trim();
  const history = document.getElementById("history").value;
  const geography = document.getElementById("geography").value;
  const mathematics = document.getElementById("mathematics").value;
  const english = document.getElementById("english").value;
  const science = document.getElementById("science").value;

  if (name === "" || roll === "" || history === "" || geography === "" || mathematics === "" || english === "" || science === "") {

      errorMessage.textContent = "Please enter all the details and marks.";
      result.classList.add("hidden");
      return;
  }

  const historyMark = Number(history);
  const geographyMark = Number(geography);
  const mathematicsMark = Number(mathematics);
  const englishMark = Number(english);
  const scienceMark = Number(science);

  if (
      historyMark < 0 || historyMark > 100 ||
      geographyMark < 0 || geographyMark > 100 ||
      mathematicsMark < 0 || mathematicsMark > 100 ||
      englishMark < 0 || englishMark > 100 ||
      scienceMark < 0 || scienceMark > 100
  ) {

      errorMessage.textContent = "Each mark must be between 0 and 100.";
      result.classList.add("hidden");
      return;
  }
    errorMessage.textContent = "";
  const total = historyMark + geographyMark + mathematicsMark + englishMark + scienceMark;
  const percentage = total / 5;
  const subjects = ["History", "Geography", "Mathematics", "English", "Science"];
  const bestMark = Math.max(...marks);
  const weakMark = Math.min(...marks);
  const bestSubject = subjects[marks.indexOf(bestMark)];
  const weakestSubject = subjects[marks.indexOf(weakMark)];
  const subjectsPassed = marks.filter(mark => mark >= 40).length;
  const subjectsFailed = 5 - subjectsPassed;

  let grade = "F";
  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";
  else if (percentage >= 40) grade = "E";

  const status = percentage >= 40 && subjectsFailed === 0 ? "PASS" : "FAIL";
  document.getElementById("resultName").textContent = name;
  document.getElementById("resultRoll").textContent = "Roll No: " + roll;
  document.getElementById("total").textContent = total + " / 500";
  document.getElementById("percentage").textContent = percentage.toFixed(1) + "%";
  document.getElementById("grade").textContent = grade;
  document.getElementById("status").textContent = status;
  document.getElementById("status").className = "status " + status.toLowerCase();
  document.getElementById("bestSubject").textContent = bestSubject + " (" + bestMark + ")";
  document.getElementById("weakestSubject").textContent = weakestSubject + " (" + weakMark + ")";
  document.getElementById("subjectsPassed").textContent = subjectsPassed;
  document.getElementById("subjectsFailed").textContent = subjectsFailed;
  result.classList.remove("hidden");
});

form.addEventListener("reset", function () {
  result.classList.add("hidden");
  document.getElementById("errorMessage").textContent = "";
});
