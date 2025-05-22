function Input({ value, onChange, readOnly = false }) {
  return (
    <input type="number" value={value} onChange={onChange} readOnly={readOnly} placeholder="Digite o valor"/>
  );
}

export default Input;
