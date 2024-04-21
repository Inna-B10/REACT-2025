# Oppsummering:
Komponenter enkapsulerer en bit av et Grafisk Grensesnitt.

# Dette kan være alt fra:
- En spesifikk knapp med styling
- En sammensatt Bruker Registrerings Form
- Layout komponenter som bestemmer hvordan Header, Aside, Main og Footer skal arrangeres
- Hele Sider av Applikasjonen din
    
I React så blir disse komponenentene gitt gjennom funksjoner som returnerer en ny data type (JSX).
Vi skal starte med 3 forskjellige måter vi kan definere disse komponentene på.

# Statiske Komponenter:
Enkleste formen for en komponent, returnerer HTML (JSX) uten noen måte å variere den på.

# Komponenter med argumenter:
En mer nyttig type komponent. Her kan du gi inn noe som ligner på HTML attributes (React Properties) og bruke de til å lage variasjoner av komponentene dine.

# Kontainer Komponenter:
Mye brukt til litt mer avanserte settups. Lar deg definere komponenter som tar imot andre komponenter eller html som input. Veldig nyttig for å lage layout og andre typer kontainere.
