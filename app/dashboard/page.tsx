import '@/app/ui/page.css';
export default function Page() {
    return( 
<>

  <header>
    <h1 id="top">Home of the Sports</h1>
  </header>

  <section>
    <img src="/img1.jpg" />
    <h3>Sporting Goods</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
      porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus
      lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc
      viverra imperdiet enim. Fusce est.{" "}
    </p>
  </section>
  <footer>
    <div className="column col-4 info">
      <h3>Company Info</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
        porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
        purus lectus malesuada libero,sit amet commodo magna eros quis urna.
        Nunc viverra imperdiet enim. Fusce est.{" "}
      </p>
    </div>
    <div className="column col-4 contact">
      <h3>Contact Us</h3>
      <p>
        <i className="fas fa-map-marker-alt fa-1.5x" /> Main Street, Portsmouth,
        RI, 02837{" "}
      </p>
      <p>
        <i className="fas fa-phone-alt fa-1.5x" />
        1-555-555-5555
      </p>
      <p>
        <i className="fas fa-envelope-square fa-1.5x" />
        email@email.com
      </p>
    </div>
    <div className="column col-4 Social">
      <h3>Social Media</h3>
      <p>
        <i className="fab fa-facebook fa-2x" />
        Facebook
      </p>
      <p>
        <i className="fab fa-instagram fa-2x" />
        Instagram
      </p>
      <p>
        <i className="fab fa-twitter fa-2x" />
        Twitter
      </p>
    </div>
  </footer>
</>

    );
  }