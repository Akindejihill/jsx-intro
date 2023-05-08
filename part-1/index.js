const FirstComponent = () => (
    <h1>My very first component</h1>
);

const NamedComponent = (prop) => (
    <p>My name is {prop.name}</p>
);

const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="My Name" />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);