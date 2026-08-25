import profileImg from "@/assets/images/profile/profile_img.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[var(--bg)]"
    >
      <div className="mx-auto grid min-h-screen max-w-[var(--content-width)] grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:gap-20">
        {/* Text */}
        <div className="flex flex-col items-start text-left">
          <p className="mb-4 text-sm font-medium text-[var(--accent)]">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-[0.08em] text-[var(--text-h)] sm:text-5xl">
            I'm YUJEONG
          </h2>

          <p className="mt-6 text-xl font-medium text-[var(--text-strong)] sm:text-lg">
            Software Engineer | Frontend-focused
          </p>

          <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-[var(--text-muted)] sm:text-sm">
            <p>
              I’m a frontend-focused software engineer who enjoys turning
              complex ideas into simple, maintainable products.
            </p>

            <p>
              With experience in financial services and React-based development,
              I care about both how products work and how they’re built.
            </p>

            <p>
              I like taking ownership beyond my code — from solving technical
              problems to improving development workflows.
            </p>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Gradient Border Shape */}
          <div className="relative h-[520px] w-[460px] rotate-[-8deg] rounded-[35%_65%_60%_40%] bg-gradient-to-br from-blue-600 via-sky-400 to-blue-300 p-[2px]">
            {/* White Inner Shape */}
            <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-[35%_65%_60%_40%] bg-white">
              {/* Profile Image */}
              <img
                src={profileImg}
                alt="profile_img"
                className="h-full w-full object-cover object-top scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
