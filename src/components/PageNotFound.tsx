import Nav from "./Nav";
import ReturnHomeButton from "./ReturnHomeButton";

function PageNotFound() {
  return (
    <div className="min-h-[100vh]">
      <Nav startedSession={true} />

      <div className="pt-5 lg:pt-12 pb-3 lg:pb-5pb-3 lg:pb-5">
        <div className="px-5 lg:px-32 pb-3 lg:pb-5 flex flex-col justify-center items-center">
          
            <p className="font-causal text-base lg:text-lg font-normal text-center mb-9">Page Not Found!</p>
          

          {/* return home */}
          <div className="inline-block transform duration-300 md:hover:scale-110">
            <ReturnHomeButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
