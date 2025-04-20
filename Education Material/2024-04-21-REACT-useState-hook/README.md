# Reaktive Variabler

React bruker et konsept kjent som det Virtuelle DOM for å optimalisere oppdateringer til brukergrensesnittet. Det Virtuelle DOM er en lettvekts kopi av det "virkelige" DOM som lar React raskt bestemme hvilke deler av brukergrensesnittet som trenger å oppdateres. Dette gjøres ved å sammenligne den nåværende tilstanden av det Virtuelle DOM med den forrige, og deretter gjennomføre nødvendige endringer i det faktiske DOM.

For å håndtere tilstanden i applikasjonen, introduserer React konseptet med reaktive variabler gjennom en funksjon kalt useState. Denne funksjonen lar deg opprette tilstandsvariabler som React vil spore. Når disse variablene oppdateres, sørger React for at komponenten re-rendres for å reflektere de siste endringene.

```javascript
const [count, setCount] = useState(0);
```

I eksemplet ovenfor opprettes en tilstandsvariabel count med en initialverdi på 0. setCount er en funksjon som lar oss oppdatere count. Når count oppdateres, vil React automatisk oppdatere komponenten for å vise den nye verdien.

For å lære mer om useState kan du besøke de offisielle React-dokumentasjonssidene:

## Lenker:

- React Docs - [useState](https://react.dev/reference/react/useState)
- React Docs - [React hooks](https://react.dev/reference/react/hooks)
- React Learn - [State: A Components Memory](https://react.dev/learn/state-a-components-memory)
- Bonus: Repo stilsatt  via TailwindCSS - https://github.com/LarsGJobloop/kodehodet-modul-d-13-02-24-use-state
  
<br>

- Ekstra [TailwindCSS](https://tailwindcss.com/)
