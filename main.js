function createGame(time1, time2, horario) {
  return `
    <li>
      <img src="./assets/icon-${time1}.svg" alt="Bandeira do ${time1}" />
      <strong>${horario}</strong>
      <img src="./assets/icon-${time2}.svg" alt="Bandeira da ${time2}" />
    </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games} 
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "ecuador", "13:00")) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "iran", "10:00") +
      createGame("senegal", "netherlands", "13:00") +
      createGame("usa", "wales", "16:00")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "ksa", "07:00") +
      createGame("denmark", "tunisia", "10:00") +
      createGame("mexico", "poland", "13:00") +
      createGame("france", "australia", "16:00")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("morocco", "croatia", "07:00") +
      createGame("spain", "costa_rica", "10:00") +
      createGame("germany", "japan", "13:00") +
      createGame("belgium", "canada", "16:00")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "cameroon", "07:00") +
      createGame("uruguay", "kor", "10:00") +
      createGame("portugal", "ghana", "13:00") +
      createGame("brazil", "serbia", "16:00")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("wales", "iran", "07:00") +
      createGame("qatar", "senegal", "10:00") +
      createGame("netherlands", "ecuador", "13:00") +
      createGame("england", "usa", "16:00")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "australia", "07:00") +
      createGame("poland", "ksa", "10:00") +
      createGame("france", "denmark", "13:00") +
      createGame("argentina", "mexico", "16:00")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "costa_rica", "07:00") +
      createGame("belgium", "morocco", "10:00") +
      createGame("croatia", "canada", "13:00") +
      createGame("spain", "germany", "16:00")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "serbia", "07:00") +
      createGame("kor", "ghana", "10:00") +
      createGame("brazil", "switzerland", "13:00") +
      createGame("portugal", "uruguay", "16:00")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("ecuador", "senegal", "12:00") +
      createGame("netherlands", "qatar", "12:00") +
      createGame("iran", "usa", "16:00") +
      createGame("wales", "england", "16:00")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "france", "12:00") +
      createGame("australia", "denmark", "12:00") +
      createGame("poland", "argentina", "16:00") +
      createGame("ksa", "mexico", "16:00")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "belgium", "12:00") +
      createGame("canada", "morocco", "12:00") +
      createGame("japan", "spain", "16:00") +
      createGame("costa_rica", "germany", "16:00")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("kor", "portugal", "12:00") +
      createGame("ghana", "uruguay", "12:00") +
      createGame("serbia", "switzerland", "16:00") +
      createGame("cameroon", "brazil", "16:00")
  )
