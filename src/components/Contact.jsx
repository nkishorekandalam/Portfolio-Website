import { profile } from '../data'

export default function Contact() {
  const year = new Date().getFullYear()

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <h2>
            Driven by <em>curiosity</em>.
            <br />
            Focused on <em>impact</em>.
          </h2>
          <p>Currently seeking Analyst and Operations opportunities. I&apos;d love to hear from you.</p>
          <div className="contact-info">
            <div>
              <span>Based in</span>
              <p>{profile.location}</p>
            </div>
            <div>
              <span>Phone</span>
              <p>{profile.phone}</p>
            </div>
            <div>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <span>
            © {year} {profile.name}. Thanks for visiting.
          </span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}
