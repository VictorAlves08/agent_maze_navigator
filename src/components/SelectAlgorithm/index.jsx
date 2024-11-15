import { searchAlgorithmsOptions } from '../../utils/mazeData';

import { useAlgorithm } from '../../contexts/AlgorithmContext';

import './styles.css';

const SelectAlgorithm = () => {
    const { selectedAlgorithm, setSelectedAlgorithm, isRunning } = useAlgorithm();

    const handleChange = (e) => {
        setSelectedAlgorithm(e.target.value);
    };

    return (
        <div className="select-algorithm-container">
            <select
                className="custom-select"
                value={selectedAlgorithm}
                onChange={handleChange}
                disabled={isRunning}
            >
                {searchAlgorithmsOptions.map((option) => (
                    <option key={option.id} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectAlgorithm;
