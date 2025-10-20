import RowComponent from './rowComponent.jsx';

function ListComponent({ items }) {
    return (
        <div className="list">
            {items.map((itemList, index) => (
                <RowComponent key={index} item={itemList} />
            ))}
        </div>
    );
}
export default ListComponent;