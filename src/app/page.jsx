import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">

      <header className="h-[54px] w-full border-b border-gray-200 bg-white">
  <div className="flex h-full w-full items-center px-8">

    <div className="flex items-center gap-2 shrink-0">

      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4fc49f] text-[17px] font-bold text-white">
        G
      </div>

      <span className="text-[17px] font-bold tracking-[-0.5px] text-[#202124]">
        grammarly
      </span>

    </div>

    <nav className="ml-[80px] hidden items-center gap-17 text-[14px] text-[#202124] lg:flex">

      <button className="flex items-center gap-2 whitespace-nowrap">
        Why Grammarly
        <span className="text-[13px]">⌄</span>
      </button>

      <button className="flex items-center gap-2 whitespace-nowrap">
        For Work
        <span className="text-[13px]">⌄</span>
      </button>

      <button className="flex items-center gap-2 whitespace-nowrap">
        For Education
        <span className="text-[13px]">⌄</span>
      </button>

      <button className="whitespace-nowrap">
        Compare Plans
      </button>

      <button className="flex items-center gap-2 whitespace-nowrap">
        Tools & Guides
        <span className="text-[13px]">⌄</span>
      </button>

    </nav>

    <div className="ml-auto flex items-center gap-7">

      <button className="hidden text-[14px] font-bold text-[#202124] md:block">
        My Grammarly
      </button>

      <button className="rounded-md bg-[#37816c] px-4 py-2 text-[14px] font-bold text-white transition hover:bg-[#2e6f5d]">
        Start a Free Trial
      </button>

    </div>

  </div>
</header>


    <div className="h-[51px] w-full border-b border-gray-300 bg-[#f5f5f7]">

  <div className="flex h-full w-full items-center px-8 lg:px-10">

  
    <div className="mr-28">
      <span className="text-[18px] font-bold text-black">
        Business
      </span>
    </div>



    <nav className="flex items-center gap-11 text-[14px] text-black">

      <button>
        Pricing
      </button>

      <button className="flex items-center gap-2">
        Solutions
        <span className="text-[11px]">⌄</span>
      </button>

      <button>
        Learn
      </button>

      <button>
        Security
      </button>

    </nav>

  </div>

</div>


      <section className="relative min-h-[700px] overflow-hidden bg-[#0d0e16]">

  <div className="mx-auto flex min-h-[700px] max-w-[1220px] items-center px-8">
    

    <div className="relative z-30 w-full lg:w-1/2">

      <h1 className="max-w-[510px] text-[38px] font-bold leading-[1.1] tracking-[-1.5px] text-white">
        AI Your Business Can
        <br />
        Run With
      </h1>

      <p className="mt-9 max-w-[475px] text-[17px] leading-[1.4] text-white">
        Grammarly Business combines AI communication assistance
        with the knowledge of your entire organization to achieve
        results. Experience work with the intelligence you need,
        when you need it, where you’re already working.
      </p>

      <button className="mt-9 rounded-md bg-white px-7 py-3.5 text-[14px] font-bold text-[#173331] transition hover:bg-gray-100">
        Start a Free Trial
      </button>

    </div>


    <div className="relative hidden h-[700px] w-1/2 lg:block">


      <div className="absolute left-[80px] top-[100px] z-10 h-[480px] w-[594px] overflow-hidden rounded-lg">

        <Image
          src="/novo_pessoas.png"
          alt="Pessoas trabalhando"
          fill
          priority
          className="object-cover"
        />

      </div>

    </div>

  </div>

</section>
    </main>
         );
        }