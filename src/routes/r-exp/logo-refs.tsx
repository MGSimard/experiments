import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/r-exp/logo-refs")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-12">
      <h1 className="text-2xl font-bold uppercase">R REFERENCES</h1>
      <section>
        <h2 className="text-lg font-bold">DOWNLOAD</h2>
      </section>
      <section>
        <h2 className="text-lg font-bold">TAG REFERENCES</h2>
        <ul className="list-inside list-disc">
          <li>Neotokyo</li>
          <li>Tag 2</li>
          <li>Tag 3</li>
          <li>Tag 4</li>
          <li>Tag 5</li>
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-bold uppercase">FONT REFERENCES</h2>
        <h3 className="text-base font-bold uppercase">Tomorrow</h3>
        <p className="uppercase">The quick brown fox jumps over the lazy dog</p>
        <p>The quick brown fox jumps over the lazy dog</p>
        <h3 className="text-base font-bold uppercase">Geist Sans Variable</h3>
        <p className="uppercase">The quick brown fox jumps over the lazy dog</p>
        <p>The quick brown fox jumps over the lazy dog</p>
        <h3 className="text-base font-bold uppercase">Geist Mono Variable</h3>
        <p className="uppercase">The quick brown fox jumps over the lazy dog</p>
        <p>The quick brown fox jumps over the lazy dog</p>
        <h3 className="text-base font-bold uppercase">Geist Pixel Variable</h3>
        <p className="uppercase">The quick brown fox jumps over the lazy dog</p>
        <p>The quick brown fox jumps over the lazy dog</p>
      </section>
      <section>
        <h2 className="text-lg font-bold uppercase">COLOUR REFERENCES - Geist</h2>
        <ul className="*:p-2">
          <li className="bg-[#E02B20]">#E02B20 (R RED)</li>
          <li>Colour 2</li>
          <li>Colour 3</li>
          <li>Colour 4</li>
          <li>Colour 5</li>
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-bold">LOGO REFERENCES</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] *:bg-red-500">
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </div>
      </section>
    </div>
  );
}
