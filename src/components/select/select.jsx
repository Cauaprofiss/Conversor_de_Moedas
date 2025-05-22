function Select({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="Escolha">Escolha</option>
      <option value="BRL">Real (BRL)</option>
      <option value="USD">Dólar (USD)</option>
      <option value="EUR">Euro (EUR)</option>
      <option value="GBP">Libra (GBP)</option>
    </select>
  );
}

export default Select;
