'use client'
const items = [
  'Anxiety', 'Relationships', 'Burnout', 'Teen Support',
  'Life Transitions', 'Couples', 'Identity', 'Depression',
  'Overthinking', 'Work Stress', 'Self-Confidence', 'Family Challenges',
]

export default function Marquee() {
  const all = [...items, ...items]
  return (
    <div style={{ backgroundColor: '#0F0F0F', padding: '14px 0', overflow: 'hidden', whiteSpace: 'nowrap' as const }}>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      <div style={{ display: 'inline-flex', animation: 'marquee 35s linear infinite' }}>
        {all.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '0 20px' }}>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#F5C842', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'rgba(250,250,247,0.5)' }}>
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}