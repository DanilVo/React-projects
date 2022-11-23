const App = ({initialButtonText, initialClassesLists}) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClassesList] = React.useState(initialClassesLists)
  
  const onButtonClick = () => {
    setButtonText('Hello From React');
    setClassesList('green-btn')
  };
  
  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" initialClassesLists="" />);
