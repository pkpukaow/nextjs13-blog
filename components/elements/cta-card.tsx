import Image from "next/image";

const CTACard = () => {
  return (
    <div className="relative px-6 py-10 overflow-hidden rounded-md bg-slate-100">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/95 via-white/70 to-white/30" />
      {/* Image */}
      <Image
        alt="cta-card-image"
        className="object-cover object-center"
        fill
        src="https://images.unsplash.com/photo-1511724891541-0c0b83d9ea31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      {/* Content Container */}
      <div className="relative z-20">
        <div className="text-lg font-medium">#exploretheworld</div>
        <h3 className="mt-3 text-4xl font-semibold">
          Explore the world with me!
        </h3>
        <p className="max-w-lg mt-2 text-lg">
          {`Explore the world with me! I'm travelling around the world. I've visited most of the great cities of USA and currently I'm travelling in Thailand Join me!`}
        </p>
        {/* Form */}
        <form className="flex items-center w-full gap-2 mt-6">
          <input
            placeholder="Write your email."
            className="w-full px-3 py-2 text-base rounded-md outline-none md:w-auto bg-white/80 focus:ring-2 ring-neutral-600 placeholder:text-sm"
          />
          <button className="px-3 py-2 rounded-md whitespace-nowrap bg-neutral-900 text-neutral-100">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTACard;
