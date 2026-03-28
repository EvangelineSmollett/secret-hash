"use client";

type HashInputFieldProps = {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

export function HashInputField({ value, onChange, disabled }: HashInputFieldProps) {
  return (
    <label className="field-shell">
      <span className="field-label">
        <span>Commit Hash</span>
        <span>Bytes32</span>
      </span>
      <input
        className="field-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        placeholder="0x..."
      />
    </label>
  );
}
