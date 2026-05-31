function LifecycleDemo() {
    console.log("LifecycleDemo: component được gọi!");
    
    return (
        <div className="demo-card lifecycle-card">
            <h2>Lifecycle Demo</h2>
            <p>Mở Console (F12) để xem log</p>
            <p>Component render khi được mở từ menu Tier 1.</p>
        </div>
    );
}

export default LifecycleDemo;
