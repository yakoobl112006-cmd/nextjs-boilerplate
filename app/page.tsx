export default function Page() {
  const services = [
    {
      title: "Airport Transfers",
      desc: "On-time pickup and drop-off service for business and personal travel with a smooth, stress-free experience.",
    },
    {
      title: "Corporate Travel",
      desc: "Professional chauffeur service for meetings, client pickups, executive travel, and business events.",
    },
    {
      title: "Special Events",
      desc: "Private transportation for weddings, dinners, parties, and important occasions where timing matters.",
    },
    {
      title: "Hourly Service",
      desc: "Flexible private driver service when you need a chauffeur on standby for multiple stops or longer trips.",
    },
  ];

  const testimonials = [
    {
      name: "Daniel R.",
      text: "Very professional, always on time, and the car was spotless. Easily the best chauffeur service I’ve used.",
    },
    {
      name: "Sarah M.",
      text: "Booked an airport ride early in the morning and everything went perfectly. Super smooth and reliable.",
    },
    {
      name: "Michael T.",
      text: "Used this service for a business event and it made a great impression. Clean, classy, and punctual.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-semibold tracking-[0.2em] uppercase">Blackline Chauffeur</h1>
            <p className="text-xs text-neutral-400">Private Driver & Executive Transport</p>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="text-neutral-300 transition hover:text-white">Services</a>
            <a href="#about" className="text-neutral-300 transition hover:text-white">About</a>
            <a href="#reviews" className="text-neutral-300 transition hover:text-white">Reviews</a>
            <a href="#contact" className="text-neutral-300 transition hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-2xl border border-white/20 bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
          >
            Book Now
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">Luxury Chauffeur Service</p>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
              Professional private transportation with comfort, class, and reliability.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-300 md:text-lg">
              Serving airport transfers, executive travel, special events, and hourly bookings with a premium experience from pickup to drop-off.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
              >
                Reserve Your Ride
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                View Services
              </a>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold">24/7</p>
                <p className="mt-1 text-sm text-neutral-400">Availability</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold">100%</p>
                <p className="mt-1 text-sm text-neutral-400">Professional</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold">5-Star</p>
                <p className="mt-1 text-sm text-neutral-400">Service</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 shadow-2xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-neutral-950 p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-400">Featured Ride</p>
                    <h3 className="text-2xl font-semibold">Executive Class</h3>
                  </div>
                  <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">Premium</div>
                </div>
                <div className="aspect-[4/3] rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6">
                  <div className="flex h-full items-end justify-between rounded-[1.25rem] border border-dashed border-white/10 p-6">
                    <div>
                      <p className="text-sm text-neutral-400">Luxury Sedan Service</p>
                      <p className="mt-2 max-w-xs text-lg text-neutral-200">
                        Clean vehicle, smooth ride, and professional presentation for every trip.
                      </p>
                    </div>
                    <div className="text-5xl">🚘</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-neutral-300">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Airport pickup</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Business travel</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Events & weddings</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Hourly bookings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Our Services</p>
          <h3 className="mt-3 text-3xl font-semibold md:text-4xl">Chauffeur service tailored to your schedule.</h3>
          <p className="mt-4 text-neutral-300">
            Whether you need a single ride or a private driver for the day, every booking is handled with punctuality, discretion, and attention to detail.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-lg">
              <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-300">
                Premium Service
              </div>
              <h4 className="text-xl font-semibold">{service.title}</h4>
              <p className="mt-3 leading-7 text-neutral-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Why Choose Us</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">A luxury experience built on trust and professionalism.</h3>
          </div>
          <div className="space-y-5 text-neutral-300 leading-7">
            <p>
              We focus on clean presentation, dependable timing, and excellent customer care. From airport pickups to executive travel, every ride is handled with the level of service clients expect from a premium chauffeur company.
            </p>
            <p>
              Our goal is simple: make every trip comfortable, smooth, and stress-free while giving clients the confidence that their transportation is handled the right way.
            </p>
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Client Reviews</p>
          <h3 className="mt-3 text-3xl font-semibold md:text-4xl">What clients say about the service.</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <p className="text-lg leading-8 text-neutral-200">“{item.text}”</p>
              <p className="mt-6 text-sm uppercase tracking-[0.25em] text-neutral-400">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-8 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Book a Ride</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">Request your chauffeur service today.</h3>
            <p className="mt-4 max-w-lg leading-7 text-neutral-300">
              Tell us where and when you need service, and we’ll get back to you with availability and pricing.
            </p>
            <div className="mt-8 space-y-3 text-neutral-300">
              <p><span className="text-white font-medium">Phone:</span> (555) 123-4567</p>
              <p><span className="text-white font-medium">Email:</span> bookings@blacklinechauffeur.com</p>
              <p><span className="text-white font-medium">Service Area:</span> Your City and surrounding areas</p>
            </div>
          </div>

          <form className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <div>
              <label className="mb-2 block text-sm text-neutral-300">Full Name</label>
              <input className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-neutral-500" placeholder="Your full name" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-neutral-300">Phone Number</label>
              <input className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-neutral-500" placeholder="Your phone number" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-neutral-300">Pickup Location</label>
              <input className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-neutral-500" placeholder="Enter pickup location" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-neutral-300">Drop-off Location</label>
              <input className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-neutral-500" placeholder="Enter destination" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-neutral-300">Date</label>
                <input type="date" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-neutral-300">Time</label>
                <input type="time" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm text-neutral-300">Message</label>
              <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-neutral-500" placeholder="Tell us about your ride request" />
            </div>
            <button type="button" className="w-full rounded-xl bg-white px-4 py-3 font-medium text-black transition hover:opacity-90">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-neutral-500">
        © 2026 Blackline Chauffeur. All rights reserved.
      </footer>
    </div>
  );
}
