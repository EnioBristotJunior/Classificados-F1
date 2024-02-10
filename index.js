var table = document.getElementById("tabela");
function send() {
  let ano = document.getElementById("year").value;
  if (ano < 1950 || ano > 2023) {
    alert("Digite um ano entre 1950 e 2023");
  } else {
    console.log(ano);
    table.innerText = "";
    fetch("https://ergast.com/api/f1/" + ano + "/driverStandings.json")
      .then((result) => result.json())
      .then((data) => {
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings.forEach(
          (d) => {
            const tr = document.createElement("tr");

            const thRow = document.createElement("th").classList.add("row");

            const tdPosition = document.createElement("td");
            const tdName = document.createElement("td");
            const tdPoints = document.createElement("td");

            tdPoints.innerHTML = d.points;
            tdPosition.innerHTML = d.position;
            tdName.innerHTML = d.Driver.givenName;

            tr.appendChild(tdName);
            tr.appendChild(tdPosition);
            tr.appendChild(tdPoints);

            table.appendChild(tr);
          }
        );
      });
  }
}
