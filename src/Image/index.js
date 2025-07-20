const Image = (props) => {
  return (
    <div className="slide">
      <img id={props.img.id} src={props.img.src} alt={props.img.altText} />
    </div>
  );
}

export default Image;