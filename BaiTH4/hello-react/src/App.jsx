import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tier1Demo from "./tiers/Tier1Demo";
import Tier2Demo from "./tiers/Tier2Demo";
import Tier3Demo from "./tiers/Tier3Demo";
import Tier4Demo from "./tiers/Tier4Demo";
import Tier5Demo from "./tiers/Tier5Demo";
import Tier6Demo from "./tiers/Tier6Demo";
import TodoApp from "./tiers/TodoApp";

const tiers = [
  { id: 1, label: "React Flow" },
  { id: 2, label: "JSX Variables" },
  { id: 3, label: "Components" },
  { id: 4, label: "useState" },
  { id: 5, label: "Events" },
  { id: 6, label: "Lists & CRUD" },
  { id: 7, label: "Todo App" },
];

const tierComponents = {
  1: Tier1Demo,
  2: Tier2Demo,
  3: Tier3Demo,
  4: Tier4Demo,
  5: Tier5Demo,
  6: Tier6Demo,
  7: TodoApp,
};

function App() {
  const [activeTier, setActiveTier] = useState(1);
  const ActiveDemo = tierComponents[activeTier];

  return (
    <div className="app-shell">
      <Header tiers={tiers} activeTier={activeTier} onSelectTier={setActiveTier} />
      <main className="page-content">
        <ActiveDemo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
