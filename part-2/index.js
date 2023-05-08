const Tweet = (prop) => (
    <div className="tweet">
        <p className="username">by <b>{prop.username}</b> AKA: {prop.name}</p>
        <p className="date">posted at: {prop.date}</p>
        <p className="message">{prop.message}</p>
    </div>
);

const App = () => {
    return (
        <div>
            <Tweet name="Mr. Rogers" username="captainamerica" date={new Date().toDateString()} message="It's a beautiful day in the neighborhood!"/>
            <Tweet name="Mr. Pym" username="Visionsdad" date={new Date().toDateString()} message="Every new challenge is a chance to grow."/>
            <Tweet name="Ms. Maximoff" username="hocuspocus" date={new Date().toDateString()} message="May the winds of fate guide you."/>
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);