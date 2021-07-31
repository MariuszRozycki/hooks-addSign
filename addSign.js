const AddSign = () => {
  const [text, setText] = React.useState('Text ');

  const handleOnClick = () => {
    // const letter = 'a';
    // setText(text + letter);
    const randomNr = Math.floor(Math.random() * 11);
    setText(text + randomNr);
  }

  return (
    <React.Fragment>
      <button onClick={handleOnClick}>Add "A"</button>
      <h1>{text}</h1>
    </React.Fragment>
  )
}



ReactDOM.render(<AddSign />, document.getElementById('root'));