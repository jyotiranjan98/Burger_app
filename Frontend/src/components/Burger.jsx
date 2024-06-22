import './Burger.css';

const Burger = ({ slices }) => {
    return (
        <div className="burger">
            <div className="bread-top">================== bread</div>
            {slices.map((slice, index) => (
                <div key={index} className={`slice ${slice.type}`}>
                    {slice.type}
                </div>
            ))}
            <div className="bread-bottom">================== bread</div>
        </div>
    );
};

export default Burger;
