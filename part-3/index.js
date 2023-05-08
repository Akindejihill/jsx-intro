const Person = (prop) => {

    const name = prop.name;
    const displayName = name.length > 8? name.slice(0, 6) + ".." : name ; 

    if (prop.hobbies){
        return (
            <div className="person">
                <p>"Learn some information about this person.</p>
                <h3>{prop.age >= 18? displayName + ", please go vote" : displayName + ", you must be 18" }</h3>
                <div>
                    <h3>Hobbies</h3>
                    <ul>
                        {prop.hobbies.map(item => <li>{item}</li>) }
                    </ul>

                </div>
            </div>
        )
    }
    else {
        return (
            <div className="person">
                <p>"Learn some information about this person.</p>
                <h3>{prop.age >= 18? displayName + ", please go vote" : displayName + ", you must be 18" }</h3>
            </div>
        )
    }
};

const App = () => {
    return (
        <div>
            <Person age={18} name="Abisholababola"/>
            <Person age={17} name="Kikio" hobbies={["making mixed tapes from the radio", "sleeping", "bike riding"]}/>
            <Person age={18} name="Atum"/>
        </div>
    );
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);