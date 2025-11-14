describe("Weather App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  // 1. Testar att startsidan visar välkomstmeddelandet
  it("visar välkomstmeddelande innan sökning", () => {
    cy.contains("Ange en plats för att se väderinformation").should("exist");
  });

  // 2. Testar att användaren kan skriva i inputfältet
  it("låter användaren skriva en plats och reagerar på Enter", () => {
    cy.get(".search-input")
      .type("Stockholm")
      .should("have.value", "Stockholm")
      .type("{enter}");

    cy.get(".search-input").should("have.value", "");
  });

  // 3. Testar API-anrop genom mockning
  it("visar data från mockat API-svar", () => {
    cy.intercept(
      "GET",
      "https://api.openweathermap.org/data/2.5/weather?q=Stockholm*",
      {
        statusCode: 200,
        body: {
          name: "Stockholm",
          sys: { country: "SE" },
          weather: [
            {
              description: "clear sky",
              icon: "01d",
            },
          ],
          main: {
            temp: 15,
            feels_like: 14,
          },
          wind: {
            speed: 3,
          },
        },
      }
    ).as("getWeather");

    cy.get(".search-input").type("Stockholm{enter}");

    // Vänta på mockat API
    cy.wait("@getWeather");

    // Kontrollera att UI visar datan från mocken
    cy.contains("Stockholm, SE").should("exist");
    cy.contains("clear sky").should("exist");
    cy.contains("15°C").should("exist");
    cy.contains("14°C").should("exist");
    cy.contains("3 km/h").should("exist");
  });
});
