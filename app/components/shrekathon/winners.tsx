export default function Winners() {
  return (
    <section
      id="shrekathon-winners"
      className="max-w-5xl mx-auto mb-20 text-center md:text-left font-corbert font-bold"
    >
      <h2 className="text-4xl font-bold text-dark-purple mb-6">
        🏆 Top Winners
      </h2>

      <div className="max-w-4xl mx-auto">
        <svg
          width="100%"
          viewBox="0 70 680 250"
          xmlns="http://www.w3.org/2000/svg"
          className="font-corbert"
        >
          <g className="group cursor-pointer">
            <rect x="45" y="170" width="140" height="130" rx="4" fill="#D3D1C7" stroke="#5F5E5A" strokeWidth="0.5"/>
            <rect x="58" y="175" width="120" height="30" rx="4" fill="white" stroke="#ccc" strokeWidth="0.5"/>
            <text x="117" y="191" textAnchor="middle" dominantBaseline="central" fontSize="12">To Be Announced</text>
          </g>

          <g className="group cursor-pointer">
            <rect x="210" y="110" width="140" height="190" rx="4" fill="#FAC775" stroke="#BA7517" strokeWidth="0.5"/>
            <rect x="220" y="115" width="120" height="30" rx="4" fill="white" stroke="#ccc" strokeWidth="0.5"/>
            <text x="280" y="131" textAnchor="middle" dominantBaseline="central" fontSize="12">To Be Announced</text>
          </g>

          <g className="group cursor-pointer">
            <rect x="370" y="170" width="140" height="130" rx="4" fill="#F5C4B3" stroke="#993C1D" strokeWidth="0.5"/>
            <rect x="380" y="175" width="120" height="30" rx="4" fill="white" stroke="#ccc" strokeWidth="0.5"/>
            <text x="440" y="191" textAnchor="middle" dominantBaseline="central" fontSize="12">To Be Announced</text>
          </g>

          <g className="group cursor-pointer">
            <rect x="530" y="170" width="140" height="130" rx="4" fill="#F5C4B3" stroke="#993C1D" strokeWidth="0.5"/>
            <rect x="540" y="175" width="120" height="30" rx="4" fill="white" stroke="#ccc" strokeWidth="0.5"/>
            <text x="600" y="191" textAnchor="middle" dominantBaseline="central" fontSize="12">To Be Announced</text>
          </g>

          <rect x="30" y="300" width="730" height="12" rx="3" fill="#ccc"/>

          <text x="117" y="158" textAnchor="middle" fontSize="12">Best Technical Innovation</text>
          <text x="280" y="98" textAnchor="middle" fontSize="12">Overall Best Game</text>
          <text x="440" y="158" textAnchor="middle" fontSize="12">Best Theme Integration</text>
          <text x="600" y="158" textAnchor="middle" fontSize="12">Best Art Direction</text>
        </svg>
      </div>
    </section>
  );
}
