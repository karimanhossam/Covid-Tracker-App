import React from "react";
import InfoCard from "./Card";
function AwarenessCards() {
  const cardProps1 = {
    title: "Symptoms",
    body: "Symptoms can include mild to severe respiratory illness with fever, dry cough, shortness of breath and difficulty in breathing. Some patients experience body aches, muscle pain, headaches, nasal congestion, runny nose, sore throat, diarrhea, nausea or loss of smell and taste.",
    note: "Note: The above symptoms doesn’t mean that you have the disease, unless you have a recent travel history or you have been in contact with a confirmed COVID-19 case.",
    url: "/symptoms.jpg",
    li: false,
    list: [],
  };
  const cardProps2 = {
    title: "Spread",
    body: "COVID-19 spreads from person-to-person through contaminated droplets, that  travel from a sick person through coughing or sneezing or from your hands to your eyes, nose and mouth when you touch an infected surface without sanitizing or washing your hands. Therefore, it is important to follow hand hygiene practices.",
    note: "",
    url: "/spread.jpg",
    li: false,
    list: [],
  };

  const cardProps3 = {
    title: "Misconceptions",
    body: "",
    note: "",
    url: "/misconceptions.png",
    li: true,
    list: [
      "Antibiotics cannot cure COVID-19. Antibiotics fight bacteria and have no effect on viruses.",
      "Influenza vaccine cannot because the vaccine only fights the virus that causes influenza, which is different from the COVID- 19 virus.",
      "Garlic is healthy as it contains antimicrobial properties. However, there is no evidence that eating garlic can protect us against COVID-19.",
    ],
  };
  return (
    <div className="card-container">
      <InfoCard cardProps={cardProps1} />
      <InfoCard cardProps={cardProps2} />
      <InfoCard cardProps={cardProps3} />
    </div>
  );
}
export default AwarenessCards;
