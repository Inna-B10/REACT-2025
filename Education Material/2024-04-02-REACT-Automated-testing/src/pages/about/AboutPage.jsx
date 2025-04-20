import { useLocalStorage } from "../../hooks/useLocalStorage/useLocalStorage";

export function AboutPage() {
  const [note, setNote] = useLocalStorage("note", {
    initialState: "Hello",
  });

  function updateNote(event) {
    setNote(event.target.value);
  }

  return (
    <main>
      <section>
        <p>Note: {note}</p>
        <input type="text" onChange={updateNote} />
      </section>
      <h1 className="text-center">About Page</h1>
    </main>
  );
}
