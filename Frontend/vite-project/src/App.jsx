import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";
import "./App.css";

function HomePage() {
  return (
    <main className="home-page">
      <header className="home-header">
        <Link className="home-logo" to="/" aria-label="SnapPost home">
          <span className="home-logo-icon">S</span>
          SnapPost
        </Link>

        <nav className="home-nav" aria-label="Main navigation">
          <Link to="/feed">Explore</Link>
          <Link to="/create-post">Create a post</Link>
          <Link className="home-nav-button" to="/feed">
            Open feed
          </Link>
        </nav>
      </header>

      <section className="home-hero">
        <div className="home-hero-content">
          <span className="home-eyebrow">A little moment, shared</span>
          <h1>
            Your moments
            <br />
            <span>deserve a place.</span>
          </h1>
          <p>
            SnapPost is a simple space to share what you’re doing, discover
            other people’s posts, and keep the good moments close.
          </p>

          <div className="home-actions">
            <Link className="home-button home-button-primary" to="/create-post">
              Create a post <span aria-hidden="true">→</span>
            </Link>
            <Link className="home-button home-button-secondary" to="/feed">
              Explore the feed
            </Link>
          </div>

          <div className="home-note">
            <span className="home-note-dot" />
            Share something worth remembering
          </div>
        </div>

        <div className="home-visual" aria-label="A preview of shared moments">
          <div className="home-sun" />
          <div className="home-card home-card-back">
            <div className="home-card-art home-card-art-pink">
              <span>
                little
                <br />
                things
              </span>
            </div>
            <div className="home-card-caption">
              <span className="home-avatar home-avatar-pink">M</span>
              <span>made my day ☀️</span>
            </div>
          </div>

          <div className="home-card home-card-front">
            <div className="home-card-art home-card-art-blue">
              <span className="home-art-sun">☀</span>
              <span className="home-art-hill home-art-hill-one" />
              <span className="home-art-hill home-art-hill-two" />
              <span className="home-art-label">
                somewhere
                <br />
                slow
              </span>
            </div>
            <div className="home-card-caption">
              <span className="home-avatar home-avatar-blue">J</span>
              <span>Sunday, outside</span>
              <span className="home-card-heart" aria-label="liked">
                ♥
              </span>
            </div>
          </div>

          <div className="home-sticker">✨</div>
          <div className="home-visual-label">Your corner of the internet</div>
        </div>
      </section>

      <section className="home-features" aria-label="What you can do">
        <article className="home-feature">
          <span className="home-feature-icon home-feature-icon-peach">✳</span>
          <div>
            <h2>Share your day</h2>
            <p>Turn the everyday into something worth keeping.</p>
          </div>
        </article>
        <article className="home-feature">
          <span className="home-feature-icon home-feature-icon-lilac">↗</span>
          <div>
            <h2>Find inspiration</h2>
            <p>See what everyone else has been up to.</p>
          </div>
        </article>
        <article className="home-feature">
          <span className="home-feature-icon home-feature-icon-mint">♡</span>
          <div>
            <h2>Keep it simple</h2>
            <p>Good moments, shared without the fuss.</p>
          </div>
        </article>
      </section>

      <footer className="home-footer">
        <span>SnapPost</span>
        <span>Made for the moments in between.</span>
      </footer>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
