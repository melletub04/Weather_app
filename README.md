Reflektion och dokumentation

Syfte

Syftet med projektet var att skapa en webbapplikation i React som hämtar väderdata från OpenWeatherMap och presenterar informationen på ett tydligt och användarvänligt sätt. Applikationen skulle hantera användarens inmatning och kommunicera med ett externt API. Projektet skulle även versionshanteras med Git och testas med Cypress för att säkerställa att gränssnitt och funktioner fungerar som avsett.

Teknisk lösning
Val av teknik

Jag valde att utveckla applikationen med React och Vite. Vite ger en snabb och modern utvecklingsmiljö och passar bra för små till medelstora projekt.

Funktionalitet
API-integration

Jag använder axios för att hämta väderdata från OpenWeatherMap. När användaren trycker på Enter i sökfältet skickas en request med stadens namn. Resultatet sparas i state och skickas vidare till Weather-komponenten.
API-urlen byggs dynamiskt baserat på användarens input.

State-hantering

Med useState lagrar applikationen:

den sökta platsen (location)

den data som kommer från API:et (data)

Det gör att komponenterna automatiskt uppdateras när ny väderinformation hämtas.

Events

Funktionen searchLocation triggas när användaren trycker på Enter. Den skickar API-anropet och nollställer inputfältet.

UI och responsivitet

Gränssnittet är byggt med CSS. Layouten är responsiv så att applikationen fungerar både på mobil och desktop. Väderkortet anpassar sig efter datan och visar temperatur, väderbeskrivning, ikon, vind och "känns som".

Säkerhet

Även om applikationen är liten har jag tagit hänsyn till:

att API-anrop inte körs om användaren inte skriver in något

att användarinmatningen kontrolleras

Tester (Cypress)

Jag använde Cypress för att skapa end-to-end tester. Dessa verifierar att:

startsidan laddar med ett välkomstmeddelande

användaren kan skriva i sökrutan och trycka Enter

mockat API-svar visas korrekt i gränssnittet

sökfälte töms efter sökning

Detta säkerställer att applikationen fungerar från användarens perspektiv.

Versionshantering

Git användes under hela projektet. Jag gjorde regelbundna commits med tydliga meddelanden som beskriver förändringarna, exempelvis:

"Add Weather-component"

"Add Cypress to application"

Detta skapar en spårbar utvecklingshistorik.

Resultat

Applikationen uppfyller kravspecifikationen. Den:

är responsiv och fungerar på både mobil och desktop

hanterar användarens input och fel på ett säkert sätt

har fungerande end-to-end tester

är versionshanterad på ett strukturerat sätt

Även tangentbordsnavigering fungerar som förväntat med TAB och ENTER, och applikationen har god kontrast för tillgänglighet.

Reflektion

Under projektet insåg jag hur viktigt det är med tydlig struktur i både React-komponenter och API-hantering. API:et kräver en giltig stad, och jag lärde mig att fel måste fångas upp för att undvika oväntade krascher. Jag märkte också hur värdefullt Cypress är, testerna gav mig direkt feedback på hur applikationen beter sig ur ett användarperspektiv.

Jag blev även påmind om hur viktigt det är att skriva tydliga commits. Det gör att man lätt kan backa till en fungerande version om något går fel. Responsiv design och användarupplevelse var också viktiga delar och det gav mig en bättre förståelse för hur layout och innehåll ska anpassas för olika skärmstorlekar.

Slutsats

Jag är nöjd med både resultatet och processen. Jag byggde en fungerande, responsiv och tydligt strukturerad React-applikation som kommunicerar med ett externt API. Jag använde Cypress för testning, Git för versionshantering och löste de problem som uppstod längs vägen.
Framöver tar jag med mig vikten av:

att hantera API-fel på ett bra sätt

att använda mig av testning

att skriva meningsfulla commits

att bygga komponenter som är enkla att återanvända och underhålla
