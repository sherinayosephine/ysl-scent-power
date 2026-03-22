import { useState } from "react";
import {
  X, Star, Search, MessageCircle, Heart, Share2, Plus,
  ChevronRight, Flame, Users, User, Check, Bell,
} from "lucide-react";

type Page = "home" | "profile" | "discover" | "community";
type WardrobeTab = "ysl" | "layering" | "custom";

const scentOptions = ["LUMEN", "MINÉRALEWAVE", "VECTOR", "AETHER", "BLANC", "VERDE"];

const communityPosts = [
  { user: "Sofia M.", avatar: "S", content: "Just layered YSL Libre with VECTOR. The dry down is incredible. #YSLScentPower", likes: 234, replies: 12, time: "2h" },
  { user: "Aria K.", avatar: "A", content: "BLANC + AETHER = my new signature for morning meetings. So fresh! ✨", likes: 189, replies: 8, time: "4h" },
  { user: "Luna P.", avatar: "L", content: "YSL vending machine experience today. Mind blown by the personalization! 🖤", likes: 412, replies: 23, time: "5h" },
  { user: "Emma R.", avatar: "E", content: "VERDE is giving me spring garden party vibes. Perfect for brunch dates!", likes: 156, replies: 15, time: "6h" },
  { user: "Zara N.", avatar: "Z", content: "My combo: LUMEN + YSL Black Opium. It's mysterious yet fresh. Total game changer!", likes: 298, replies: 19, time: "8h" },
];

const yslFragrances = [
  { name: "Mon Paris", sub: "Eau de Parfum", img: "/asset/mon paris.webp", owned: true },
  { name: "Libre", sub: "Eau de Parfum", img: "/asset/libre1.jpg", owned: true },
  { name: "Black Opium", sub: "Eau de Parfum", img: "/asset/opium.webp", owned: true },
  { name: "YSL Dual Spray", sub: "Travel Collection", img: "/asset/dual spray.png", owned: false },
];

const layeringScents = [
  { name: "VECTOR", sub: "Sharp Spice", img: "/asset/vector.png" },
  { name: "BLANC", sub: "White Tea", img: "/asset/blanc.png" },
  { name: "AETHER", sub: "Aromatic", img: "/asset/aether.png" },
  { name: "MINÉRALEWAVE", sub: "Aquatic", img: "/asset/minerale.png" },
  { name: "LUMEN", sub: "Citrus", img: "/asset/florent.png" },
  { name: "VERDE", sub: "Green Floral", img: "/asset/neroli.png" },
];

const customMixes = [
  { name: "Evening Elegance", combo: "VECTOR + BLANC + Libre", stars: 5, occasion: "Evening" },
  { name: "Fresh Morning", combo: "AETHER + MINÉRALEWAVE", stars: 4, occasion: "Daily" },
  { name: "Midnight Mystery", combo: "LUMEN + Black Opium + VECTOR", stars: 5, occasion: "Night" },
  { name: "Power Meeting", combo: "BLANC + VECTOR", stars: 5, occasion: "Professional" },
];

const trendingCombos = [
  { rank: "01", name: "VECTOR + BLANC", desc: "Sharp spice meets white tea. Unforgettable evening presence.", tag: "COMBO OF THE DAY" },
  { rank: "02", name: "NEROLI + VERDE", desc: "Fresh green floral. Ideal for brunch and outdoor gatherings.", tag: "WEEKEND FAVORITE" },
  { rank: "03", name: "AETHER + MINÉRALEWAVE", desc: "Elevated aromatic meets aquatic. The ultimate pro signature.", tag: "PROFESSIONAL POWER" },
  { rank: "04", name: "LUMEN + BLANC", desc: "Citrus brightness layered with clean white tea notes.", tag: "RISING" },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,600;0,6..96,700;1,6..96,400&family=Inter:wght@400;500;600;700;800&display=swap');
  
  .scent-app-container {
    --black: #000;
    --white: #fff;
    --g950: #0a0a0a;
    --g900: #111;
    --g800: #1a1a1a;
    --g700: #2a2a2a;
    --g500: #555;
    --g400: #888;
    --g200: #ccc;
    --gold: #C2813F;
    --serif: 'Bodoni Moda', Georgia, serif;
    --sans: 'Inter', sans-serif;
    
    background: var(--black);
    color: var(--white);
    font-family: var(--sans);
    min-height: 100vh;
    padding-top: 100px; 
    display: flex;
    justify-content: center;
  }

  .scent-app-container h1, 
  .scent-app-container h2, 
  .scent-app-container h3, 
  .scent-app-container h4, 
  .scent-app-container h5 { 
    font-family: var(--serif); 
    font-weight: 700; 
  }

  .app-main {
    width: 100%;
    max-width: 800px;
    border-left: 1px solid var(--g800);
    border-right: 1px solid var(--g800);
    background: var(--black);
    min-height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
  }

  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 32px;
    border-bottom: 1px solid var(--g800);
  }
  .app-title-group .sub { font-size: 10px; font-weight: 800; letter-spacing: 3px; color: var(--g400); margin-bottom: 2px;}
  .app-title-group .main-title { font-size: 24px; font-family: var(--serif); font-weight: 700; letter-spacing: 2px;}

  .main-tabs {
    display: flex;
    border-bottom: 1px solid var(--g800);
    background: var(--black);
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .m-tab {
    flex: 1;
    padding: 20px 0;
    background: transparent;
    border: none;
    color: var(--g500);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: all 0.2s;
    cursor: pointer;
  }
  .m-tab.active {
    color: var(--gold);
    border-bottom: 2px solid var(--gold);
  }
  .m-tab:hover:not(.active) { color: var(--white); }

  .page-content { padding: 40px 32px; }
  .section-label { font-size: 13px; font-weight: 800; letter-spacing: 3px; color: var(--g400); display: block; margin-bottom: 16px; text-transform: uppercase; }
  
  .profile-header { display: flex; flex-direction: column; align-items: center; margin-bottom: 48px; }
  .p-avatar { width: 88px; height: 88px; background: var(--white); color: var(--black); display: flex; align-items: center; justify-content: center; font-size: 40px; font-family: var(--serif); font-weight: 700; margin-bottom: 16px;}
  .p-name { font-size: 32px; margin-bottom: 8px; }
  .p-role { font-size: 11px; font-weight: 800; letter-spacing: 3px; color: var(--gold); margin-bottom: 32px;}
  .p-stats { display: flex; gap: 48px; }
  .p-stat { text-align: center; }
  .p-stat-n { font-size: 28px; font-family: var(--serif); font-weight: 700; }
  .p-stat-l { font-size: 10px; font-weight: 800; letter-spacing: 2px; color: var(--g400); margin-top: 4px; text-transform: uppercase;}

  .sub-tabs { display: flex; gap: 1px; background: var(--g800); margin-bottom: 32px; }
  .s-tab { flex: 1; padding: 16px; background: var(--g950); border: none; color: var(--g400); font-size: 12px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: all 0.2s;}
  .s-tab.active { background: var(--white); color: var(--black); }

  .item-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 32px; }
  .item-card { background: var(--black); border: 1px solid var(--g800); padding: 16px; cursor: pointer; transition: border-color 0.2s; }
  .item-card:hover { border-color: var(--g500); }
  .item-img-box { background: var(--white); aspect-ratio: 1; margin-bottom: 16px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
  .item-img-box img { width: 100%; height: 100%; object-fit: cover; }
  .item-name { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
  .item-sub { font-size: 12px; font-weight: 500; color: var(--g400); }

  .list-grid { display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px; }
  .list-item { display: flex; align-items: center; gap: 20px; background: var(--black); border: 1px solid var(--g800); padding: 16px; }
  .list-img-box { width: 64px; height: 64px; background: var(--white); overflow: hidden; flex-shrink: 0; }
  .list-img-box img { width: 100%; height: 100%; object-fit: cover; }
  
  .mix-card { background: var(--black); border: 1px solid var(--g800); padding: 24px; margin-bottom: 16px; }
  .mix-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
  .mix-name { font-size: 20px; }
  .mix-tag { font-size: 10px; font-weight: 800; padding: 4px 10px; border: 1px solid var(--g700); color: var(--g400); letter-spacing: 1px; text-transform: uppercase; }
  .mix-combo { font-size: 13px; font-weight: 700; color: var(--gold); margin-bottom: 16px; line-height: 1.5; }
  
  .btn-primary { width: 100%; padding: 20px; background: var(--white); color: var(--black); border: none; font-size: 13px; font-weight: 800; letter-spacing: 3px; display: flex; align-items: center; justify-content: center; gap: 10px; cursor: pointer; transition: opacity 0.2s; text-transform: uppercase;}
  .btn-primary:hover { opacity: 0.9; }

  /* Discover */
  .discover-hero { margin-bottom: 48px; padding-left: 24px; border-left: 3px solid var(--gold); }
  .discover-hero h2 { font-size: 40px; margin-bottom: 12px; }
  .discover-hero p { font-size: 16px; color: var(--g200); }

  .trending-item { display: flex; gap: 24px; padding: 24px 0; border-bottom: 1px solid var(--g800); align-items: flex-start; }
  .t-rank { font-size: 40px; color: var(--g700); font-family: var(--serif); font-weight: 700; line-height: 1; }
  .t-tag { font-size: 10px; font-weight: 800; letter-spacing: 2px; color: var(--gold); margin-bottom: 8px; }
  .t-title { font-size: 20px; margin-bottom: 8px; }
  .t-desc { font-size: 14px; color: var(--g400); line-height: 1.5; }

  /* Community */
  .feed-post { padding: 24px 0; border-bottom: 1px solid var(--g800); }
  .post-header { display: flex; gap: 16px; align-items: center; margin-bottom: 16px; }
  .post-avatar { width: 48px; height: 48px; background: var(--white); color: var(--black); display: flex; align-items: center; justify-content: center; font-size: 20px; font-family: var(--serif); font-weight: 700; }
  .post-user { font-size: 15px; font-weight: 700; }
  .post-time { font-size: 12px; color: var(--g500); margin-left: 8px; }
  .post-content { font-size: 15px; line-height: 1.6; margin-bottom: 16px; }
  .post-actions { display: flex; gap: 24px; }
  .action-btn { display: flex; align-items: center; gap: 8px; background: none; border: none; color: var(--g500); font-size: 13px; font-weight: 700; cursor: pointer; transition: color 0.2s; }
  .action-btn:hover { color: var(--white); }

  /* Modal */
  .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px; }
  .modal-content { background: var(--g950); border: 1px solid var(--g800); width: 100%; max-width: 600px; padding: 40px; max-height: 90vh; overflow-y: auto; }
  .modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
  .modal-title { font-size: 24px; letter-spacing: 2px; }
  .form-group { margin-bottom: 24px; }
  .form-group label { display: block; font-size: 10px; font-weight: 800; letter-spacing: 2px; color: var(--g400); margin-bottom: 12px; }
  .form-input { width: 100%; background: none; border: none; border-bottom: 1px solid var(--g700); color: var(--white); font-size: 16px; padding: 12px 0; outline: none; }
  .form-input:focus { border-color: var(--white); }
  .accord-btn { padding: 10px 16px; font-size: 11px; font-weight: 700; letter-spacing: 1px; border: 1px solid var(--g700); background: transparent; color: var(--g400); margin: 0 8px 8px 0; cursor: pointer; }
  .accord-btn.selected { background: var(--white); color: var(--black); border-color: var(--white); }

  /* Mobile Nav Bar */
  .mobile-nav { display: none; position: fixed; bottom: 0; left: 0; right: 0; background: var(--black); border-top: 1px solid var(--g800); z-index: 200; }
  .nav-btn { flex: 1; padding: 16px 0; background: none; border: none; color: var(--g500); display: flex; flex-direction: column; align-items: center; gap: 6px; font-weight: 700; cursor: pointer; }
  .nav-btn.active { color: var(--gold); }

  @media (max-width: 768px) {
    .scent-app-container { padding-top: 80px; }
    .mobile-nav { display: flex; }
    .main-tabs { display: none; } 
    .app-main { border: none; padding-bottom: 100px; }
    .page-content { padding: 24px 20px; }
    .p-stats { gap: 32px; }
    
    /* MODIFIED: Fix for Goal 1 - Kept 2 columns on mobile so images are not massive */
    .item-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .item-card { padding: 12px; }
    .item-name { font-size: 14px; }
    .item-sub { font-size: 11px; }
    .list-item { padding: 12px; gap: 12px; }
    .list-img-box { width: 56px; height: 56px; }
    .mix-card { padding: 16px; }
    .mix-name { font-size: 18px; }
  }
`;

export function ScentAppPage() {
  const [page, setPage] = useState<Page>("profile");
  const [wardrobeTab, setWardrobeTab] = useState<WardrobeTab>("ysl");
  const [showMixModal, setShowMixModal] = useState(false);
  const [selectedAccords, setSelectedAccords] = useState<string[]>([]);
  const [rating, setRating] = useState(0);

  const toggleAccord = (a: string) =>
    setSelectedAccords((prev) => prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]);

  return (
    <>
      <style>{css}</style>
      <div className="scent-app-container">
        
        <main className="app-main">
          
          <div className="app-header">
            <div className="app-title-group">
              <div className="sub">YVES SAINT LAURENT</div>
              <div className="main-title">MySCENT</div>
            </div>
            <button style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer' }}>
              <Bell size={24} strokeWidth={2} />
            </button>
          </div>

          <div className="main-tabs">
            <button className={`m-tab ${page === "discover" ? "active" : ""}`} onClick={() => setPage("discover")}>Discover</button>
            <button className={`m-tab ${page === "profile" ? "active" : ""}`} onClick={() => setPage("profile")}>Profile</button>
            <button className={`m-tab ${page === "community" ? "active" : ""}`} onClick={() => setPage("community")}>Community</button>
          </div>

          {/* PROFILE PAGE */}
          {page === "profile" && (
            <div className="page-content">
              <div className="profile-header">
                <div className="p-avatar">Y</div>
                <h2 className="p-name">YSL Enthusiast</h2>
                <div className="p-role">SCENT ARCHITECT</div>
                <div className="p-stats">
                  <div className="p-stat"><div className="p-stat-n">10</div><div className="p-stat-l">ITEMS</div></div>
                  <div className="p-stat"><div className="p-stat-n">4</div><div className="p-stat-l">MIXES</div></div>
                </div>
              </div>

              <div className="sub-tabs">
                {([ ["ysl", "YSL Parfums"], ["layering", "Layering Notes"], ["custom", "My Mixes"] ] as [WardrobeTab, string][]).map(([v, l]) => (
                  <button key={v} className={`s-tab ${wardrobeTab === v ? "active" : ""}`} onClick={() => setWardrobeTab(v)}>{l}</button>
                ))}
              </div>

              {/* YSL Parfums Tab */}
              {wardrobeTab === "ysl" && (
                <>
                  {/* MODIFIED: Fix for Goal 2 - Button moved to TOP */}
                  <button className="btn-primary" style={{ marginBottom: 24 }}><Plus size={18} strokeWidth={3}/> ADD FRAGRANCE</button>
                  <div className="item-grid">
                    {yslFragrances.map((f, i) => (
                      <div key={i} className="item-card">
                        <div className="item-img-box"><img src={f.img} alt={f.name} /></div>
                        <div className="item-name">{f.name}</div>
                        <div className="item-sub">{f.sub}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Layering Notes Tab */}
              {wardrobeTab === "layering" && (
                <>
                  {/* MODIFIED: Fix for Goal 2 - Button moved to TOP */}
                  <button className="btn-primary" style={{ marginBottom: 24 }}><Plus size={18} strokeWidth={3}/> ADD LAYERING SCENT</button>
                  <div className="list-grid">
                    {layeringScents.map((s, i) => (
                      <div key={i} className="list-item">
                        <div className="list-img-box"><img src={s.img} alt={s.name} /></div>
                        <div style={{ flex: 1 }}>
                          <div className="item-name">{s.name}</div>
                          <div className="item-sub">{s.sub}</div>
                        </div>
                        <Check size={24} color="var(--gold)" strokeWidth={3} />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* My Mixes Tab */}
              {wardrobeTab === "custom" && (
                <>
                  {/* MODIFIED: Fix for Goal 2 - Button moved to TOP */}
                  <button className="btn-primary" style={{ marginBottom: 24 }} onClick={() => setShowMixModal(true)}>
                    <Plus size={18} strokeWidth={3}/> REGISTER NEW MIX
                  </button>
                  <div style={{ marginBottom: 32 }}>
                    {customMixes.map((m, i) => (
                      <div key={i} className="mix-card">
                        <div className="mix-header">
                          <div className="mix-name">{m.name}</div>
                          <span className="mix-tag">{m.occasion}</span>
                        </div>
                        <div className="mix-combo">{m.combo}</div>
                        <div style={{ display: "flex", gap: 4 }}>
                          {[1,2,3,4,5].map((s) => (
                            <Star key={s} size={16} fill={s <= m.stars ? "var(--gold)" : "none"} color={s <= m.stars ? "var(--gold)" : "#444"} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* DISCOVER PAGE */}
          {page === "discover" && (
            <div className="page-content">
              <div className="discover-hero">
                <span className="section-label" style={{ color: 'var(--gold)' }}>TODAY'S THEME</span>
                <h2>Evening Sophistication</h2>
                <p>Bold and refined notes for tonight's events</p>
              </div>

              <span className="section-label">FEATURED COMBINATIONS</span>
              <div style={{ marginBottom: 48 }}>
                {trendingCombos.map((c, i) => (
                  <div key={i} className="trending-item">
                    <div className="t-rank">{c.rank}</div>
                    <div style={{ flex: 1 }}>
                      <div className="t-tag">{c.tag}</div>
                      <div className="t-title">{c.name}</div>
                      <div className="t-desc">{c.desc}</div>
                    </div>
                    <ChevronRight size={24} color="var(--g500)" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* COMMUNITY PAGE */}
          {page === "community" && (
            <div className="page-content">
              <span className="section-label">LATEST ACTIVITY</span>
              <div>
                {communityPosts.map((p, i) => (
                  <div key={i} className="feed-post">
                    <div className="post-header">
                      <div className="post-avatar">{p.avatar}</div>
                      <div>
                        <span className="post-user">{p.user}</span>
                        <span className="post-time">· {p.time}</span>
                      </div>
                    </div>
                    <div className="post-content">{p.content}</div>
                    <div className="post-actions">
                      <button className="action-btn"><Heart size={18} /> {p.likes}</button>
                      <button className="action-btn"><MessageCircle size={18} /> {p.replies}</button>
                      <button className="action-btn"><Share2 size={18} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        <nav className="mobile-nav">
          <button className={`nav-btn ${page === "discover" ? "active" : ""}`} onClick={() => setPage("discover")}>
            <Flame size={22} strokeWidth={2.5} /><span>DISCOVER</span>
          </button>
          <button className={`nav-btn ${page === "profile" ? "active" : ""}`} onClick={() => setPage("profile")}>
            <User size={22} strokeWidth={2.5} /><span>PROFILE</span>
          </button>
          <button className={`nav-btn ${page === "community" ? "active" : ""}`} onClick={() => setPage("community")}>
            <Users size={22} strokeWidth={2.5} /><span>COMMUNITY</span>
          </button>
        </nav>

        {showMixModal && (
          <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setShowMixModal(false)}>
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">CREATE YOUR MIX</h3>
                <button onClick={() => setShowMixModal(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><X size={28} /></button>
              </div>
              
              <div className="form-group">
                <label>NAME YOUR CREATION</label>
                <input type="text" className="form-input" placeholder="e.g., Midnight Mystery" />
              </div>
              
              <div className="form-group">
                <label>ACCORDS USED</label>
                <div>
                  {scentOptions.map((a) => (
                    <button key={a} type="button" className={`accord-btn ${selectedAccords.includes(a) ? "selected" : ""}`} onClick={() => toggleAccord(a)}>{a}</button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>RATING</label>
                <div style={{ display: 'flex', gap: 12 }}>
                  {[1,2,3,4,5].map((s) => (
                    <button key={s} type="button" onClick={() => setRating(s)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      <Star size={36} fill={s <= rating ? "var(--gold)" : "none"} color={s <= rating ? "var(--gold)" : "#fff"} strokeWidth={1.5} />
                    </button>
                  ))}
                </div>
              </div>

              <button className="btn-primary" style={{ marginTop: 32 }} onClick={() => setShowMixModal(false)}>SAVE CREATION</button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}