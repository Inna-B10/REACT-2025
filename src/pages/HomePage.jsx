import { EventHandling } from "../componets/EventHandling/EventHandling";
import { InlineEventHandling } from "../componets/InlineEventHandling/InlineEventHandling";
import { InputText } from "../componets/InputText/InputText";
import { MouseTracker } from "../componets/MouseTracker/MouseTracker";

export function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>

      <section>
        <h2>Innline Event Handling</h2>
        <InlineEventHandling />
      </section>

      <section>
        <h2>Event Handling</h2>
        <EventHandling />
      </section>

      <section>
        <h2>Input Text</h2>
        <InputText />
      </section>

      <section>
        <h2>Mouse Tracker</h2>
        <MouseTracker />
      </section>
    </main>
  )
}