export default function AboutSection() {
  return (
    <section>
      <div className="md:w-[85%] mx-2 md:mx-auto px-6 py-12">

        <h2 className="text-2xl md:text-4xl text-center font-extrabold font-montserrat text-reddish mb-9">
          PhysicianMeds
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Left Content */}
          <div className="md:text-justify">
            <p className="font-inter leading-relaxed mb-4">
              PhysicianMeds is a trusted name in the healthcare industry, delivering state-of-the-art Revenue Cycle Management,
              billing services, and complete practice management solutions for medical practices and healthcare systems of all sizes.
              At PhysicianMeds, we are committed to excellence.
              Our expert team streamlines billing and revenue cycle processes, maximizes reimbursements,
                reduces denials, ensures compliance, and strengthens the overall financial health of healthcare organizations.
            </p>
            <p className="font-inter leading-relaxed mb-4">
              With years of proven experience, our management team helps providers
              optimize resources, cut administrative costs, and increase net profits.
              Our dedicated marketing team supports practice growth through strategic SEO, social media management, and local marketing solutions that expand patient reach and build a stronger online presence.
              We combine competitive pricing with outstanding results. Backed by AI-driven
              automation and secure real-time portals, we deliver unmatched efficiency and
              growth opportunities.
            </p>
          </div>

          {/* Right Image / Illustration */}
          <div className="bg-transparent rounded-3xl overflow-hidden">
            <img
              src="/p10.jpg"
              alt="Healthcare illustration"
              className="h-full md:h-96"
            />
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
          {[
            { icon: "💡", title: "Streamlined Billing" },
            { icon: "📊", title: "Maximized Reimbursements" },
            { icon: "🚀", title: "Practice Growth" },
            { icon: "🔒", title: "Secure AI-Driven Solutions" },
          ].map((item, idx) => (
            <div key={idx} className="bg-reddish/5 border border-darkred rounded-2xl p-4 text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-cblue font-semibold font-inter">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
