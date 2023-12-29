import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix App" },
    { name: "description", content: "Started with remix" },
  ];
};

export default function Index() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}
