function Header({ tiers, activeTier, onSelectTier }) {
  return (
    <header className="site-header">
      <div>
        <p className="eyebrow">Bài thực hành 4</p>
        <h1>React Practice Lab</h1>
        <p>Đi từ luồng render cơ bản đến Todo App hoàn chỉnh.</p>
      </div>

      <nav className="tier-nav" aria-label="Danh sách bài thực hành">
        {tiers.map((tier) => (
          <button
            className={activeTier === tier.id ? "tier-link active" : "tier-link"}
            key={tier.id}
            onClick={() => onSelectTier(tier.id)}
            type="button"
          >
            <span>Tier {tier.id}</span>
            {tier.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
