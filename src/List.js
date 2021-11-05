import "./List.css";
function List(props) {
  const deleteItemsFromList = (key) => {
    const newList = props.memo.filter((itemObj) => {
      return itemObj.key !== key;
    });
    props.setMemo(newList);
  };
  return (
    <div>
      {props.memo.map((itemObj) => {
        return (
          <div className="Item">
            <p>{itemObj.item}</p>
            <button onClick={() => deleteItemsFromList(itemObj.key)}>x</button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
