# Synkronisering mot Eksterne Systemer

I web bapplikasjoner er det ofte nødvendig å kommunisere med eksterne systemer, som APIer eller nettleser-APIer. For å håndtere dette på en effektiv måte, bruker vi useEffect-hooken. useEffect lar oss utføre sideeffekter i funksjonskomponenter, som å hente data, abonnere på hendelser, eller utføre manuell DOM-manipulasjon.

Når vi bruker useEffect, gir vi den en funksjon som utfører sideeffekten. Vi kan også spesifisere en avhengighetsliste - et array av variabler som useEffect skal overvåke. Når en variabel i denne listen endres, kjører React sideeffektfunksjonen på nytt.
For å unngå minnelekkasjer og andre uønskede bivirkninger, er det viktig å rydde opp etter sideeffekter som abonnementer. Dette gjøres ved å returnere en oppryddingsfunksjon fra sideeffektfunksjonen.

```javascript
useEffect(() => {
  const subscription = dataSource.subscribe();

  // Oppryddings funksjon
  return () => {
    subscription.unsubscribe();
  };
}, [dataSource]);
```

For komplekse synkroniseringsoppgaver, kan det være nyttig å lage egne Custom Hooks. Disse lar deg enkapsulere og gjenbruke logikk på tvers av komponenter. For eksempel, en useFetch Custom Hook kan forenkle prosessen med å hente data fra et API:

```javascript
const { isPending, error, data } = useFetch(url);
```

Dette mønsteret reduserer mengden kode i hver komponent og lar dem fokusere på å presentere data, vise lasteindikatorer eller håndtere feil.

Det skal sies at du som regel ikke er alene om trenge akkurat denne funksjonaliteten så her kan det være verdt å ta en kikk på tredjeparts biblioteker for å se om det er noen som allered har laget denne logikken for deg.

For kommunisering over nettverket så har du til eksempel to biblioteker:
- [SWR (Stale While Revalidate)](https://swr.vercel.app/)
- [Tanstack Query](https://tanstack.com/query/latest)


## Lenker:
- React Docs - [useEffect](https://react.dev/reference/react/useEffect)
- React Learn  - [Synkronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- React  Learn - [Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
