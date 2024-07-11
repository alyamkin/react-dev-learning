function AlterButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

// function Button({ onClick, children }) {
//   return <button onClick={onClick}>{children}</button>;
// }

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert('Uploading!')}>Upload Image</Button>;
}

// export default function ToolBar() {
//   return (
//     <div>
//       {/* <AlterButton message="Playing!">Play Movie</AlterButton>
//       <AlterButton message="Uploading!">Upload Image</AlterButton> */}
//       <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton />
//     </div>
//   );
// }

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div onClick={() => alert('You clicked on the toolbar!')}>
      <Button onClick={() => alert('Playing!')}>Play Movie</Button>
      <Button onClick={() => alert('Uploading!')}>Ipload Image</Button>
    </div>
  );
}
