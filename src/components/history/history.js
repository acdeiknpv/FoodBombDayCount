import './history.css'

function History(props) {
    return (
        <div className="textAlign">
            <div>
                <h1>History</h1>
            </div>
            <div>
                {console.log(props.history)}
                {props.history.map(function (elem, idx) {
                    return (<li className={idx %2 === 0 ? 'odd' : 'even'} key={idx}>{elem.start} - {elem.end}: {elem.dayDifference} days</li>)
                })}
            </div>

        </div>
    );
}
export default History;