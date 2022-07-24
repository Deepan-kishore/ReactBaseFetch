const Pokemon = () => {
  const [pokeName, setname] = React.useState([]);

  const [id, addid] = React.useState(2);
  const fetchPokemon = async () => {
    const response = await fetch(`https://v2.jokeapi.dev/joke/Any?`);
    const data = await response.json();
    setname(
    data);

    // .then(res => res.json())
    //   .then( data => setname(
    // data.results
    // ))
  };
  function handleAdd() {
    addid(id => id + 1);
  }

  React.useEffect(
  () => {fetchPokemon();}, [id]);


  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h3", null, "Question:", /*#__PURE__*/

    React.createElement("br", null),
    pokeName.setup), /*#__PURE__*/



    React.createElement("h4", null, "Answer:  ", /*#__PURE__*/
    React.createElement("br", null), " ", pokeName.delivery), /*#__PURE__*/


    React.createElement("button", { onClick: handleAdd }, "Click for new Joke"))));







};




ReactDOM.render( /*#__PURE__*/
React.createElement(React.Fragment, null, /*#__PURE__*/
React.createElement(Pokemon, null)),


document.getElementById('root'));