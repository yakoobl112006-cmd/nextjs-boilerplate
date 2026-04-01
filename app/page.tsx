"use client";

export default function Page() {
  const services = [
    {
      title: "Trips To and From Any Area",
      desc: "Reliable transportation for pickups and drop-offs across Virginia, Maryland, and DC with professional service from start to finish.",
    },
    {
      title: "Hourly Service",
      desc: "Book a driver by the hour for flexible transportation, multiple stops, business needs, or personal travel.",
    },
    {
      title: "Delegation Bookings",
      desc: "Professional transportation support for delegation travel, group coordination, scheduled pickups, and important events.",
    },
    {
      title: "Business and Private Travel",
      desc: "Clean, dependable limo service for airport runs, meetings, special occasions, and private transportation needs.",
    },
  ];

  const fleet = [
    {
      name: "2023 Mercedes S580",
      type: "Luxury Sedan",
      desc: "A high-end luxury ride for clients who want comfort, presence, and a premium experience.",
    },
    {
      name: "2024 Mercedes E350",
      type: "Executive Sedan",
      desc: "A modern and professional option that is great for business travel, airport runs, and private trips.",
    },
    {
      name: "2020 Mercedes E350",
      type: "Executive Sedan",
      desc: "A clean and dependable vehicle for comfortable local trips, hourly rides, and scheduled bookings.",
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

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="min-w-0">
            <h1 className="text-lg font-semibold uppercase tracking-[0.2em] sm:text-xl">
              VA Limo Service
            </h1>
            <p className="text-xs text-neutral-400 sm:text-sm">
              Limo, Hourly, and Delegation Transportation
            </p>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <button
              onClick={() => scrollToSection("services")}
              className="text-neutral-300 transition hover:text-white"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("fleet")}
              className="text-neutral-300 transition hover:text-white"
            >
              Fleet
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-neutral-300 transition hover:text-white"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-neutral-300 transition hover:text-white"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-neutral-300 transition hover:text-white"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => scrollToSection("contact")}
            className="shrink-0 rounded-2xl border border-white/20 bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90 sm:px-5 sm:py-3"
          >
            Book Now
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
              Virginia, Maryland & DC Transportation
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Professional limo service for Virginia, Maryland, and DC.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-300 md:text-lg">
              VA Limo Service provides trips to and from destinations across Virginia, Maryland,
              and DC, along with hourly rides and delegation bookings with dependable and
              professional service.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
              >
                Reserve Your Ride
              </button>
              <button
                onClick={() => scrollToSection("fleet")}
                className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                View Our Fleet
              </button>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold">24/7</p>
                <p className="mt-1 text-sm text-neutral-400">Availability</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold">100%</p>
                <p className="mt-1 text-sm text-neutral-400">Professional</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold">Premium</p>
                <p className="mt-1 text-sm text-neutral-400">Fleet</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-4 shadow-2xl md:p-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-neutral-950 p-5 md:p-8">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-neutral-400">Featured Service</p>
                    <h3 className="text-2xl font-semibold md:text-3xl">Premium Transportation</h3>
                  </div>
                  <div className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
                    Premium
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 p-4 md:p-6">
                  <div className="flex flex-col gap-6 rounded-[1.25rem] border border-dashed border-white/10 p-4 sm:flex-row sm:items-end sm:justify-between md:p-6">
                    <div className="min-w-0">
                      <p className="text-sm text-neutral-400">VA Limo Service</p>
                      <p className="mt-2 text-base leading-7 text-neutral-200 md:text-lg">
                        Professional transportation for local trips, hourly bookings, and
                        delegation travel across Virginia, Maryland, and DC.
                      </p>
                    </div>
                    <div className="self-center text-5xl sm:self-end">🚘</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 text-sm text-neutral-300 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    Virginia trips
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    Maryland trips
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    DC trips
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    Delegation bookings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Our Services</p>
          <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
            Transportation tailored to your schedule.
          </h3>
          <p className="mt-4 text-neutral-300">
            Whether you need a single ride, hourly service, or transportation for important
            bookings, every trip is handled with punctuality, professionalism, and attention to
            detail.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-300">
                Premium Service
              </div>
              <h4 className="text-xl font-semibold">{service.title}</h4>
              <p className="mt-3 leading-7 text-neutral-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="fleet" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Our Fleet</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
              Vehicles available for client requests.
            </h3>
            <p className="mt-4 text-neutral-300">
              Here is the current fleet available through VA Limo Service. Vehicle photos can be
              added later so clients can preview each option before booking.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {fleet.map((car) => (
              <div
                key={car.name}
                className="rounded-[1.5rem] border border-white/10 bg-neutral-950 p-6 shadow-lg"
              >
                <div className="mb-5 flex aspect-[4/3] items-center justify-center rounded-[1.25rem] border border-dashed border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 text-6xl">
                  🚗
                </div>
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">{car.type}</p>
                <h4 className="mt-2 text-2xl font-semibold">{car.name}</h4>
                <p className="mt-4 leading-7 text-neutral-300">{car.desc}</p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300">
                  Photos coming soon
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Why Choose Us</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
              A premium experience built on professionalism and reliability.
            </h3>
          </div>
          <div className="space-y-5 leading-7 text-neutral-300">
            <p>
              VA Limo Service focuses on dependable timing, professional communication, and quality
              transportation throughout Virginia, Maryland, and DC. Every ride is handled with
              care so clients can count on a smooth and stress-free experience.
            </p>
            <p>
              Our goal is to provide transportation that feels reliable, professional, and easy to
              book whether the ride is a one-time trip, an hourly job, or a delegation booking.
            </p>
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Client Reviews</p>
          <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
            What clients say about the service.
          </h3>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
            >
              <p className="text-lg leading-8 text-neutral-200">“{item.text}”</p>
              <p className="mt-6 text-sm uppercase tracking-[0.25em] text-neutral-400">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-6 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Book a Ride</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">Request your ride today.</h3>
            <p className="mt-4 max-w-lg leading-7 text-neutral-300">
              Tell us where you need to go, when you need service, and whether you need a one-way
              trip, hourly service, or a delegation booking.
            </p>
            <div className="mt-8 space-y-3 text-neutral-300">
              <p>
                <span className="font-medium text-white">Phone:</span> 571 635 2862
              </p>
              <p>
                <span className="font-medium text-white">Email:</span> valimoservice703@gmail.com
              </p>
              <p>
                <span className="font-medium text-white">Service Area:</span> Virginia, Maryland,
                and DC
              </p>
            </div>
          </div>

          <form className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <div>
              <label className="mb-2 block text-sm text-neutral-300">Full Name</label>
              <input
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-neutral-500"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-300">Phone Number</label>
              <input
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-neutral-500"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-300">Requested Vehicle</label>
              <select className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none">
                <option>Choose a vehicle</option>
                <option>2023 Mercedes S580</option>
                <option>2024 Mercedes E350</option>
                <option>2020 Mercedes E350</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-300">Pickup Location</label>
              <input
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-neutral-500"
                placeholder="Enter pickup location"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-300">Drop-off Location</label>
              <input
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-neutral-500"
                placeholder="Enter destination"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-300">Service Type</label>
              <select className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none">
                <option>Choose a service</option>
                <option>One-Way Trip</option>
                <option>Round Trip</option>
                <option>Hourly Service</option>
                <option>Delegation Booking</option>
              </select>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-neutral-300">Date</label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-neutral-300">Time</label>
                <input
                  type="time"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-300">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-neutral-500"
                placeholder="Tell us about your ride request"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-white px-4 py-3 font-medium text-black transition hover:opacity-90"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-neutral-500 sm:px-6">
        © 2026 VA Limo Service. All rights reserved.
      </footer>
    </div>
  );
}
