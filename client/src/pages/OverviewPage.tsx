import { useAuthRedirect } from "../utils/custom-hooks";

const OverviewPage = () => {
  const { shouldRedirect } = useAuthRedirect("authenticated", "/");

  if (shouldRedirect) {
    return null; // Don't render anything while redirecting
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="font-xtradex font-extrabold text-7xl">Overview</h1>
      <p>
        Sign in to continue using our app whcih has and is useful for ..
        blah..blah..
      </p>
    </div>
  );
};

export default OverviewPage;
