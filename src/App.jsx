import "./App.css";
import Button from "./components/button";

let App = () => {
  return (
    <>
      {/* HEADER  */}
      <header className="navbar">
        <h2 className="logo">WatchWise</h2>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact US</a>
          </li>
        </ul>
        <div className="search-box">
          <button className="add">CART</button>
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </header>

      {/* {HERO SECTION} */}
      <section className="hero">
        <div className="hero-content">
          <h1>WatchWise</h1>
          <p>
            We do not sell time. We sell an experience, a way of doing things, a
            name, a beauty, design, techniques.
          </p>
        </div>
      </section>

      {/* {FEATURED PRODUCTS} */}
      <section className="products">
        <h2>Featured Products</h2>
        <p className="subtitle">
          Hunter watches as per your choice with flexible prices for Him & Her
        </p>

        <div className="product-grid">
          <div className="product-card">
            <img width="50%" height="50%" src="./public/watch1.png" alt="" />
            <hr />
            <h3>Stainless Steel</h3>
            <p>Classic stainless steel watch with premium finishing.</p>
            <Button />
          </div>

          <div className="product-card">
            <img width="50%" height="50%" src="./public/watch2.png" alt="" />
            <hr />
            <h3>Couple</h3>
            <p>Two hearts, one time elegant couple watches.</p>
            <Button />
          </div>

          <div className="product-card">
            <img width="50%" height="50%" src="./public/watch3.jpg" alt="" />
            <hr />
            <h3>Smart Watch</h3>
            <p>Smart looks with modern innovation & performance.</p>
            <Button />
          </div>
        </div>
      </section>

      {/* {REVIEWS} */}
      <section className="reviews">
        <h2>Customer's Review</h2>

        <div className="review-grid">
          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>Excellent quality and fast delivery. Highly recommended!</p>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>Design is premium and looks very classy.</p>
          </div>

          <div className="review-form">
            <h4>Write a review</h4>
            <textarea placeholder="Write Your Review"></textarea>
            <div>⭐⭐⭐⭐⭐</div> 
            <button className="add">Submit</button>
          </div>
        </div>
      </section>

      {/* {sale section} */}
      <section className="sale">
        <h2>Get ready for the biggest 11.11 Sale!</h2>
        <p>Get up to 70% OFF on all your favourite items</p>
        <button>Buy Now</button>
      </section>

      {/* {FOOTER} */}
      <footer>
        <div className="footer-grid">
          <div>
            <h3>WatchWise</h3>
            <p>Block 4 Model Town, Islamabad</p>
            <p>Contact: 0305-1231199</p>
            <p>Email: watchwise@yahoo.com</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <p>Return Policy</p>
            <p>Privacy Policy</p>
            <p>Track Order</p>
            <p>About Us</p>
          </div>

          <div>
            <h4>Join Our Newsletter</h4>
            <input type="email" placeholder="Enter /your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <center>
          <div>
            <p className="copyright">© 2025 WatchWise | All Rights Reserved</p>
          </div>
        </center>
      </footer>
    </>
  );
};

export default App;
