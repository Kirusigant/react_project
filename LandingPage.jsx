import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing" style={{ backgroundImage: "url('bg-image.jpg')" }}>
      <h1>Green Thumb Nursery</h1>
      <p>Your one-stop shop for premium houseplants since 1995</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}