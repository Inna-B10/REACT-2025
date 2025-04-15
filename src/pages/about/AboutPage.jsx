import { InlineEventHandling } from "../../components/InlineEventHandling/InlineEventHandling";
import {EventsEventHandling} from '../../components/EventsEventHandling/EventsEventHandling'
import { ComplexHandling } from "../../components/ComplexHandling/ComplexHandling";
import { ExternalHandling } from "../../components/ExternalHandling/ExternalHandling";

export function AboutPage() {
  return (
    <main>
      <h1>AboutPage</h1>

      <section>
        <h2>Inline Event Handling</h2>
        <InlineEventHandling />
      </section>

      <section>
        <h2>The event object</h2>
        <EventsEventHandling />
      </section>

      <section>
        <h2>Complex Handling</h2>
        <ComplexHandling />
      </section>

      <section>
        <h2>External Handling</h2>
        <ExternalHandling />
      </section>
    </main>
  )
}
