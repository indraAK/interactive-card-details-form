import PreviewCardDetails from "./components/PreviewCardDetails";
import CardDetailsForm from "./components/CardDetailsForm";
import { CardProvider } from "./context/CardContext";

const App = () => {
  return (
    <div className="container mx-auto px-4 pt-8 py-6 max-w-lg min-h-screen lg:max-w-6xl lg:flex lg:items-center lg:justify-around lg:gap-x-10">
      <CardProvider>
        <PreviewCardDetails />
        <CardDetailsForm />
      </CardProvider>
    </div>
  );
};

export default App;
