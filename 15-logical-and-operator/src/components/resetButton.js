function resetButton() {
  count > 0 && (
    <div>
      <button style={buttonStyle} onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}
