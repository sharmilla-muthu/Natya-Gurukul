import "./branch.css";

export default function Branches() {
  return (
    <div className="branches-grid">

      <div className="branch-card">
        <h3 className="branch-title">Perungudi</h3>
        <p className="branch-address">
          Kidzee, No. 14, CBI Colony 5th Main Road,<br />
          Perungudi, Chennai 600096
        </p>
        <p className="branch-info">
          Lead Instructor: <strong>Deepa Anand</strong><br />
          Phone: <a href="tel:9003570309">9003570309</a>
        </p>
      </div>

      <div className="branch-card">
        <h3 className="branch-title">Medavakkam</h3>
        <p className="branch-address">
          Casa Grande Riveria, 198/86. Velachery - Tambaram Main Road, <br/>
          Medavakkam, Chennai - 600100
        </p>
        <p className="branch-info">
          Lead Instructor: <strong>Anupama Arvind</strong><br />
          Phone: <a href="tel:990657048">990657048</a>
        </p>
      </div>

      <div className="branch-card">
        <h3 className="branch-title">Kelambakkam</h3>
        <p className="branch-address">
          Ilanthalir Kids Zone, No. 65, Rajeswari Nagar,<br />
          1st Main Street, Kelambakkam, Chennai 603103
        </p>
        <p className="branch-info">
          Lead Instructor: <strong>Sharmilla M</strong><br />
          Phone: <a href="tel:8122151006">8122151006</a>
        </p>
      </div>

      {/* NEW BRANCH */}
      <div className="branch-card">
        <h3 className="branch-title">Perumbakkam</h3>
        <p className="branch-address">
         Kidzee, Plot No. 7, 16th Street, Perumbakkam Main Road,<br />
          Soumya Nagar, Medavakkam, Chennai 600100
        </p>
        <p className="branch-info">
          Lead Instructor: <strong>Vanathi G</strong><br />
          Phone: <a href="tel:9884468684">9884468684</a>
        </p>
      </div>

    </div>
  );
}
