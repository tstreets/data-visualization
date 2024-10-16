// Reference variable to canvas
const canvasRef = document.getElementById("chart");

// Create the Chart instance
let myChart = new Chart(canvasRef, {
  // Type
  type: "bar",

  // Data Configuration
  data: {
    // labels for the data points
    labels: ["Kit-Kat", "Hersey's", "Whoppers"],

    // datasets (you only need 1 min.)
    datasets: [
      {
        label: "Candy Sold",
        data: [5, 12, 1],
        // backgroundColor: ["#000000", "#666666", "#2534ef"],
        backgroundColor: "#53ed2440",
      },
    ],
  },
});

// Create an object for storing chart info
const allCharts = {
  bar: {
    name: "Bar",
    config: {
      type: "bar",

      data: {
        labels: ["Kit-Kat", "Hersey's", "Whoppers"],

        datasets: [
          {
            label: "Candy Sold",
            data: [5, 12, 1],
            backgroundColor: "#53ed2440",
          },
        ],
      },

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

      data: {
        labels: ["Kit-Kat", "Hersey's", "Whoppers"],

        datasets: [
          {
            label: "Candy Sold",
            data: [5, 12, 1],
          },
        ],
      },
    },
  },

  line: {
    name: "Line",
    config: {
      type: "line",

      data: {
        labels: ["10/8", "10/9", "10/10"],
        datasets: [
          {
            label: "Temp",
            data: [60, 81, 90],
            tension: 0.1,
            fill: true,
          },
        ],
      },

      options: {
        scales: {
          y: {
            min: 60,
            max: 105,
          },
        },
      },
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
  };
  //   Add that button to the actual DOM
  document.querySelector("#chartButtons").appendChild(newButton);
});

function removeDatapoint() {
  myChart.data.labels.pop();
  myChart.update();
}

function addDatapoint() {
  const numValue = parseFloat(document.getElementById("num").value);
  const labelValue = document.getElementById("label").value;

  myChart.data.labels.push(labelValue);
  myChart.data.datasets[0].data.push(numValue);

  myChart.update();
}
