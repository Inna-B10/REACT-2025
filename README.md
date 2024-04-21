# Hendelses Håndtering:
		Hendelser som er relatert til elementer kan legges til elementene via en on<HendelsesType> (onClick, onChange, etc) property på elementene.
    Funksjonene som skal kjøre kan defineres innline som en JS arrow function
    For logikk som krever flere linjer så defineres de som funksjon på komponenten
    Begge teknikkene kan kombineres, spesielt aktuelt når du kun trenger deler av Event objektet for logikken
    For å holde koden oversiktlig så ønsker vi å holde den returnerte JSX i hovedsak til HTML
# Rendering i React:
    React baserer seg på en intern representasjon for hvordan DOMet skal se ut (Virtuelle DOMet)
    Resultatet av funksjonenen, React Komponentene, blir lagret av React i det Virtuelle DOMet
    React oppdatere DOMet til å reflektere det Virtuelle DOMet
    Når vi ønsker å oppdatere innholdet i DOMet så må vi gå igjennom React

    https://react.dev/learn/responding-to-events?authuser=2

    https://react.dev/learn/render-and-commit?authuser=2
