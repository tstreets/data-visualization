// Reference variable to canvas
const canvasRef = document.getElementById("chart");

// Variable to track candy sold
let candySold = {};

// Create the Chart instance
let myChart = new Chart(canvasRef, {
  // Type
  type: "bar",

  // Data Configuration
  data: {},
});

// Function for getting candySold data
async function getCandySold() {
  const candySoldRawData = await fetch(`/api/candysold`);
  const candySoldData = await candySoldRawData.json();

  candySold = {};
  for (let i = 0; i < candySoldData.candySold.length; i++) {
    const candyName = candySoldData.candySold[i];
    candySold[candyName] = candySold[candyName] || 0;
    // candySold[candyName] ||= 0;
    candySold[candyName]++;
  }

  myChart.data.labels = Object.keys(candySold);
  myChart.data.datasets = [
    {
      label: "Candy Sold",
      data: Object.values(candySold),
    },
  ];

  myChart.update();
}

getCandySold();

// Create an object for storing chart info
const allCharts = {
  bar: {
    name: "Bar",
    config: {
      type: "bar",

      data: {},

      options: {
        scales: {
          y: {
            min: 0,
            max: 20,
          },
        },
      },
    },
  },

  pie: {
    name: "Pie",
    config: {
      type: "pie",

      data: {},
    },
  },

  line: {
    name: "Line",
    config: {
      type: "line",

      data: {},
    },
  },
};

// console.log(Object.values(allCharts));

Object.values(allCharts).forEach(function (chart) {
  //  Create a button element
  const newButton = document.createElement("button");
  //   Update the text for it
  newButton.innerHTML = `Show ${chart.name} Chart`;
  //   Add an onclick function to destroy the old one and make new one
  newButton.onclick = function () {
    console.log(chart.name);
    myChart.destroy();
    myChart = new Chart(canvasRef, chart.config);
    getCandySold();
  };
  //   Add that button to the actual DOM
  document.querySelector("#chartButtons").appendChild(newButton);
});

function removeDatapoint() {
  myChart.data.labels.pop();
  myChart.update();
}

async function addDatapoint() {
  const labelValue = document.getElementById("label").value;

  await fetch(`/api/candysold/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ candyName: labelValue }),
  });

  getCandySold();
}
