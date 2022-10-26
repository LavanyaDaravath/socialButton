const Button = (props) => {
  //  Write your code here.
  const { className, textButton } = props;
  return <button className={`button ${className}`}>{textButton}</button>;
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button className="like-btn" textButton="Like" />
        <Button className="comment-btn" textButton="Comment" />
        <Button className="share-btn" textButton="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
