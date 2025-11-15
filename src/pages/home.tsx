import "./home.css"
export const Home = () => {
    return (
     <div className="page-content-wrapper">

      {/* ABOUT SECTION */}
      <section className="section-block">
        <h2 className="section-heading">Welcome</h2>

        <p className="section-text">
          <strong>Natya Gurukul</strong>, is an institution aimed at spreading the divine dance
          form in the traditional <em>‘Tanjore Bani’</em>. It was established in 2010 in Kolkata
          and re-established in 2015 in Chennai by <strong>Smt. Deepa Anand</strong>. The
          institution welcomes students from all stages of learning – beginners and advanced
          learners alike.
        </p>

        <p className="section-text">
          The school offers separate batches tailored to each student's learning stage. We focus on
          delivering both theoretical and practical training through external grade exams and stage
          performances (both group and solo).
        </p>
      </section>


      {/* DIVIDER */}
      <div className="soft-divider"></div>


      {/* WELCOME NOTE */}
      <section className="section-block">
        <h2 className="section-heading">Welcome Note from the Artistic Director</h2>

        <p className="section-text">
          It gives me immense joy to welcome you to our Bharatanatyam family. This sacred art form
          is not just a dance—it's a way of life, a journey of discipline, devotion, and
          self-discovery. At our Gurukul, we believe in nurturing not only skilled dancers, but
          also confident, grounded individuals who carry forward the rich cultural heritage of
          India with pride and grace.
        </p>

        <p className="section-text">
          As you or your child step into this world of rhythm and expression, know that learning
          Bharatanatyam is a beautiful blend of tradition and transformation. Every movement has
          meaning, every class has purpose,          and every performance is a celebration of the soul.
        </p>

        <p className="section-text">
          We look forward to walking this artistic journey with you.
        </p>

        <div className="welcome-signature">
          <p><strong>With blessings and love,</strong></p>
          <p><strong>Guru Smt. Deepa Anand</strong></p>
          <p>Founder & Artistic Director</p>
          <p>Natya Gurukul</p>
        </div>
      </section>

    </div>
    )
}