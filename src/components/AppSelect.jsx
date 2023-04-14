export default ({options, defaultValue, value, onChange}) => {
    return (
        <div>
            <select value={value} onChange={e => onChange(e.target.value)}>
                <option  disabled  value="" hidden>{defaultValue}</option>
                {
                    options.map(o => <option key={o.value} value={o.value}>{o.name}</option>)
                }
            </select>
        </div>
    );
};
