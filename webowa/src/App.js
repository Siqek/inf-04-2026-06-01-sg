import { useState } from "react";

function App() {

  const [ adres, setAdres ] = useState('');
  const [ login, setLogin ] = useState('');
  const [ haslo, setHaslo ] = useState('');
  const [ generujHaslo, setGenerujHaslo ] = useState(true);

  const [ zapisane, setZapisane ] = useState({
    adres: '',
    login: '',
    haslo: '',
    wygenerowane: true,
    shouldBeShowed: false
  });

  const submit = (e) => {
    e.preventDefault();
    setZapisane(p => ({
      adres: adres,
      login: login,
      haslo: generujHaslo ? "" : haslo,
      wygenerowane: generujHaslo,
      shouldBeShowed: true
    }));
  };

  return (
    <div className="container-fluid p-3">
      <h1>Menedżer haseł - wykonał 00000000000</h1>

      <form onSubmit={(e) => submit(e)} className="container-fluid mb-3">

        {/* adres */}
        <div className="mb-3">
          <label htmlFor="adres" className="form-label">Adres WWW:</label>
          <input
            id="adres"
            type="text"
            placeholder="Adres strony WWW"
            className="form-control"
            value={adres ?? ""}
            onChange={(e) => setAdres(e.target.value)}
          />
        </div>

        {/* login */}
        <div className="mb-3">
          <label htmlFor="login" className="form-label">Login:</label>
          <input
            id="login"
            type="text"
            placeholder="Twój login"
            className="form-control"
            value={login ?? ""}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>

        {/* hasło */}
        <div className="mb-3">
          <div className="form-check">
            <input
              id="generuj"
              type="checkbox"
              className="form-check-input"
              checked={generujHaslo}
              onChange={(e) => setGenerujHaslo(e.target.checked)}
            />
            <label htmlFor="generuj" className="form-label" >Wygeneruj hasło</label>
          </div>
          <label htmlFor="haslo" className="form-label">Hasło:</label>
          <input
            id="haslo"
            type="password"
            className="form-control"
            disabled={generujHaslo}
            value={generujHaslo ? "" : haslo ?? ""}
            onChange={(e) => setHaslo(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Zapisz</button>

      </form>

      <p className="p-2 text-primary lead">Adres: {zapisane.shouldBeShowed ? zapisane.adres : ""}</p>
      <p className="p-2 lead">Login: {zapisane.shouldBeShowed ? zapisane.login : ""}</p>
      {
        zapisane.wygenerowane && <p className="p-2 lead">Hasło automatycznie generowane</p>
      }
      {
        !zapisane.wygenerowane && <p className="p-2 lead">Hasło: {zapisane.shouldBeShowed ? zapisane.haslo : ""}</p>
      }

    </div>
  );
}

export default App;
