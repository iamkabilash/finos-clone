import agentBanking from "../assets/banking/Agent-Banking.jpg";
import coreBanking from "../assets/banking/Core-Banking-Sytem.jpg";
import finosCard from "../assets/banking/FinOS-Card.jpg";
import mobileBanking from "../assets/banking/FinOS-Mobile-Banking.jpg";
import finosPay from "../assets/banking/FinOS-Pay.jpg";

function Banking() {
  return (
    <section className="w-screen px-[80px] flex flex-col">
      <div className="flex flex-col gap-[16px]">
        <h1 className="text-4xl font-bold">
          Configurable SaaS Banking Platform
        </h1>
        <h2 className="text-xl font-semibold">
          A better suite means, a better user experience!
        </h2>
        <p className="text-xl ">
          FinOS provides a reliable, robust, and affordable solution for banks
          and financial institutions to offer financial services to the world’s
          2 billion underbanked and unbanked.
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-between mt-[50px]">
        <a href="https://www.finos.in/finos-agent-banking">
          <div className="h-[200px] flex flex-col items-center w-[12vw] bg-white rounded-lg shadow bg-gray-800 border-gray-700">
            <img className="rounded-t-lg w-[30vw]" src={coreBanking} alt="" />
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Core Banking
            </h5>
          </div>
        </a>
        <a href="https://www.finos.in/core-banking/">
          <div className="h-[200px] flex flex-col items-center w-[12vw] bg-white rounded-lg shadow bg-gray-800 border-gray-700">
            <img className="rounded-t-lg w-[30vw]" src={agentBanking} alt="" />
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Agent Banking
            </h5>
          </div>
        </a>
        <a href="https://www.finos.in/finos-internet-banking/">
          <div className="h-[200px] flex flex-col items-center w-[12vw] bg-white rounded-lg shadow bg-gray-800 border-gray-700">
            <img className="rounded-t-lg w-[30vw]" src={coreBanking} alt="" />
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Internet Banking
            </h5>
          </div>
        </a>
        <a href="https://www.finos.in/finos-mobilebanking">
          <div className="h-[200px] flex flex-col items-center w-[12vw] bg-white rounded-lg shadow bg-gray-800 border-gray-700">
            <img className="rounded-t-lg w-[30vw]" src={mobileBanking} alt="" />
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Mobile Banking
            </h5>
          </div>
        </a>
        <a href="https://www.finos.in/core-banking/">
          <div className="h-[200px] flex flex-col items-center w-[12vw] bg-white rounded-lg shadow bg-gray-800 border-gray-700">
            <img className="rounded-t-lg w-[30vw]" src={finosPay} alt="" />
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Payment Banking
            </h5>
          </div>
        </a>
        <a href="https://www.finos.in/core-banking/">
          <div className="h-[200px] flex flex-col items-center w-[12vw] bg-white rounded-lg shadow bg-gray-800 border-gray-700">
            <img className="rounded-t-lg w-[30vw]" src={finosCard} alt="" />
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Card Banking
            </h5>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Banking;
