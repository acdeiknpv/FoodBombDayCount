import './history.css'
import { useSelector } from 'react-redux';
import { selectHistory } from '../../store/reducers/formSlice.js'

function History() {

    const history = useSelector(selectHistory);

    return (
        <div className="textAlign">
            <div>
                <h1>History</h1>
            </div>
            <div>
                {
                    history.map(function (elem, idx) {
                        return (<li className={idx % 2 === 0 ? 'odd' : 'even'} key={idx}>{elem.start} - {elem.end}: {elem.dayDifference} days</li>)
                    })
                }
            </div>
        </div>
    );
}
export default History;