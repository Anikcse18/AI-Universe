// const phone_API = async (searching = 13, isshowall) => {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/phones?search=${searching}`
//   );
//   const data = await res.json();
//   const phones = data.data;

//   displayphone(phones, isshowall);
// };

const AI_Universe = async () => {
  const Api_featch = await fetch(
    `https://openapi.programming-hero.com/api/ai/tools`
  );
  const data = await Api_featch.json();
  const ai_details = data.data.tools;

  displayAI(ai_details);
};

AI_Universe();

const displayAI = (ai_details) => {
  ai_details.forEach((ai_details, index) => {
    if (index !== 5 && index !== 10) {
      const get_Ai_Caart = document.getElementById("AI_Cart");
      const creat_Ai_div = document.createElement("div");
      creat_Ai_div.classList = "card w-96 bg-base-100 shadow-xl";
      creat_Ai_div.innerHTML = `
   <figure><img src="${ai_details.image}" />
      </figure>
        <div class="card-body">
            <h2 class="card-title">Featurs</h2>
            <ul class = "list-decimal pl-7 text-slate-700">
                  <li>${ai_details.features[0]}</li>
                  <li>${ai_details.features[1]}</li>
                  <li>${ai_details.features[2]}</li>
            </ul>
              <!-- lower part of card -->
                    <section id="Date_Name">
                        <hr class="">
                        <div class="flex items-center justify-between">
                            <div class="space-y-3 mt-2">
                                <h2 class="card-title">${ai_details.name}</h2>
                                <p class="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                ${ai_details.published_in}</p>


                            </div>
                            <button class=" bg-red-100 hover:bg-red-300  rounded-full p-1" onclick = "showdetails('${ai_details.id}');">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>

                            </button>

                        </div>

                  </section>
        </div>
      
  `;
      get_Ai_Caart.appendChild(creat_Ai_div);
    }
  });
};

const showdetails = async (ai_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/${ai_id}`
  );
  const data = await res.json();
  const ai_features = data.data;
  showmodals_display(ai_features);
};
//modals box
const showmodals_display = (ai_features) => {
  ai_details_modals.showModal();
  console.log(ai_features);
};
