import { Button } from "../components/Button/Button";
import { useLocalStorage } from "../hooks/useLocalStorage/useLocalStorage";

export function LandingPage() {
  const [note, setNote] = useLocalStorage("note", {
    initialState: "Hello",
  });

  function updateNote(event) {
    setNote(event.target.value);
  }

  function handleInfo() {
    console.log("Clicked: info");
  }

  function handleAction() {
    console.log("Clicked: action");
  }

  function handleDestructive() {
    console.log("Clicked: destructive");
  }

  return (
    <main>
      <section>
        <p>Note: {note}</p>
        <input type="text" onChange={updateNote} />
      </section>
      <h1 className="text-center underline">Examples</h1>

      <section>
        <h2 className="text-center py-lg">Button Variations</h2>
        <div className="flex flex-col gap-lg">
          <section className="flex justify-center gap-md">
            <h3>Normal</h3>
            <Button onClick={handleInfo} variant="info">
              #1
            </Button>
            <Button onClick={handleAction} variant="action">
              #2
            </Button>
            <Button onClick={handleDestructive} variant="destructive">
              #3
            </Button>
          </section>
          <section className="flex justify-center gap-md">
            <h3>Disabled State</h3>
            <Button onClick={handleInfo} variant="info" disabled>
              #1
            </Button>
            <Button onClick={handleAction} variant="action" disabled>
              #2
            </Button>
            <Button onClick={handleDestructive} variant="destructive" disabled>
              #3
            </Button>
          </section>
          <section className="flex justify-center gap-md">
            <h3>Loading State</h3>
            <Button onClick={handleInfo} variant="info" isLoading>
              #1
            </Button>
            <Button onClick={handleAction} variant="action" isLoading>
              #2
            </Button>
            <Button onClick={handleDestructive} variant="destructive" isLoading>
              #3
            </Button>
          </section>
        </div>
      </section>
    </main>
  );
}
