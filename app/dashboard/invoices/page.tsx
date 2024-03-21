import '@/app/ui/accessories.css';
export default function Page() {
    return (
<>
  {/*created by Evan Rapoza*/}&gt;
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>Accessories</title>
  <link href="accessoriesstyle.css" rel="stylesheet" type="text/css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
    rel="stylesheet"
  />
  <header>
    <h1 id="top">Accessories</h1>
  </header>

  <section>
    <div className="column col-3">
      <img src="/img1.jpg" />
      <h3>Accessories</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
        porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
        purus lectus malesuada libero, sit amet commodo magna eros quis urna.
        Nunc viverra imperdiet enim. Fusce est.{" "}
      </p>
    </div>
    <div className="column col-1 bg-black">
      <h3>Lorem ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
        porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
        purus lectus malesuada libero,sit amet commodo magna eros quis urna.
        Nunc viverra imperdiet enim. Fusce est.{" "}
      </p>
    </div>
  </section>
  <section>
    <div className="column col-1">
      <h3>Accessories</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
        porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
        purus lectus malesuada libero, sit amet commodo magna eros quis urna.
        Nunc viverra imperdiet enim. Fusce est.{" "}
      </p>
    </div>
    <div className="column col-2">
      <h3>Accessories</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
        porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
        purus lectus malesuada libero, sit amet commodo magna eros quis urna.
        Nunc viverra imperdiet enim. Fusce est.Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce
        posuere, magna sed pulvinar ultricies, purus lectus malesuada libero,
        sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.
        Fusce est.{" "}
      </p>
    </div>
    <div className="column col-1 bg-black">
      <h3>Lorem Ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
        porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
        purus lectus malesuada libero, sit amet commodo magna eros quis urna.
        Nunc viverra imperdiet enim. Fusce est.{" "}
      </p>
    </div>
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