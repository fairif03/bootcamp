const population =
  "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
fetch(population)
  .then((res) => res.json())
  .then((data) => {
    var xValues = [];
    var yValues = [];
    var barColors = ["red", "green", "blue", "orange", "brown"];
    data.data.forEach((element) => {
      xValues.push(element["ID Year"]);
      yValues.push(element["Population"]);
    });
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: `Data population of ${data.data[0]["Nation"]}`,
        },
        lagend: {
          display: false,
        },
      },
    });
  });