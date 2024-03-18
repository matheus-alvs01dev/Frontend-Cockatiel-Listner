interface InputProps {
    label: string;
    value: string | number;
    updateValue(value: any): void;
    required?: boolean;
  }

export const Input = ({ label, value, updateValue, required = false }: InputProps) => {
    return (
      <div>
        <label>{label}</label>
        <input
          value={value}
          onChange={(event) => updateValue(event.target.value)}
          required={required}
        />
      </div>
    );
  };
  
  export const InputSelectGender = ({ label, value, updateValue }: InputProps) => {
    return (
      <div>
        <label>{label}</label>
        <select
          value={value}
          onChange={(event) => updateValue(event.target.value)}
        >
          <option value="unknown">Unknown</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    );
  };
  
  export const InputSelectMutation = ({
    label,
    value,
    updateValue,
    required,
  }: InputProps) => {
    return (
      <div>
        <label>{label}</label>
        <select
          value={value}
          onChange={(event) => updateValue(event.target.value)}
          required={required}
        >
          <option value="Normal">Normal</option>
          <option value="Pearl">Pearl</option>
          <option value="Lutino">Lutino</option>
          <option value="Whiteface">Whiteface</option>
          <option value="Albino">Albino</option>
          <option value="Pied">Pied</option>
          <option value="Yellowface">Yellowface</option>
          <option value="Cinnamon">Cinnamon</option>
          <option value="Silver">Silver</option>
        </select>
      </div>
    );
  };
  